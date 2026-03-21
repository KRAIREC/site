import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class KnowlesRecruitmentAPITester:
    def __init__(self, base_url="https://precision-hire.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: str = ""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name}: PASSED {details}")
        else:
            print(f"❌ {name}: FAILED {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("API Root Endpoint", success, details)
            return success
        except Exception as e:
            self.log_test("API Root Endpoint", False, f"Error: {str(e)}")
            return False

    def test_contact_submission(self, form_type: str = "test-form"):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "phone": "+44 7700 900000",
            "message": "This is a test message for contact form submission.",
            "formType": form_type
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                # Verify response structure
                required_fields = ["id", "name", "email", "message", "formType", "timestamp"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    success = False
                    details += f", Missing fields: {missing_fields}"
                else:
                    details += f", ID: {data.get('id')}, FormType: {data.get('formType')}"
                    return data.get('id')  # Return ID for further testing
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data}"
                except:
                    details += f", Raw response: {response.text}"
            
            self.log_test(f"Contact Submission ({form_type})", success, details)
            return data.get('id') if success else None
            
        except Exception as e:
            self.log_test(f"Contact Submission ({form_type})", False, f"Error: {str(e)}")
            return None

    def test_contact_retrieval(self):
        """Test retrieving contact submissions"""
        try:
            response = requests.get(f"{self.api_url}/contact", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                if isinstance(data, list):
                    details += f", Retrieved {len(data)} submissions"
                    if len(data) > 0:
                        # Check structure of first submission
                        first_submission = data[0]
                        required_fields = ["id", "name", "email", "message", "formType", "timestamp"]
                        missing_fields = [field for field in required_fields if field not in first_submission]
                        if missing_fields:
                            success = False
                            details += f", Missing fields in response: {missing_fields}"
                else:
                    success = False
                    details += f", Expected list, got: {type(data)}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data}"
                except:
                    details += f", Raw response: {response.text}"
            
            self.log_test("Contact Retrieval", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Retrieval", False, f"Error: {str(e)}")
            return False

    def test_form_validation(self):
        """Test form validation with invalid data"""
        # Test missing required fields
        invalid_data = {
            "company": "Test Company",
            "phone": "+44 7700 900000"
            # Missing name, email, message, formType
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Status: {response.status_code}"
            
            if not success:
                details += f", Expected 422 validation error, got {response.status_code}"
                try:
                    data = response.json()
                    details += f", Response: {data}"
                except:
                    details += f", Raw response: {response.text}"
            else:
                details += ", Correctly rejected invalid data"
            
            self.log_test("Form Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Form Validation", False, f"Error: {str(e)}")
            return False

    def test_email_validation(self):
        """Test email format validation"""
        invalid_email_data = {
            "name": "Test User",
            "email": "invalid-email-format",
            "message": "Test message",
            "formType": "test-form"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=invalid_email_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Status: {response.status_code}"
            
            if not success:
                details += f", Expected 422 for invalid email, got {response.status_code}"
                try:
                    data = response.json()
                    details += f", Response: {data}"
                except:
                    details += f", Raw response: {response.text}"
            else:
                details += ", Correctly rejected invalid email format"
            
            self.log_test("Email Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Email Validation", False, f"Error: {str(e)}")
            return False

    def test_all_form_types(self):
        """Test all different form types"""
        form_types = [
            "search-brief",
            "hire-talent", 
            "start-search",
            "candidate-inquiry",
            "final-cta"
        ]
        
        all_passed = True
        for form_type in form_types:
            submission_id = self.test_contact_submission(form_type)
            if not submission_id:
                all_passed = False
        
        return all_passed

    def run_all_tests(self):
        """Run comprehensive API test suite"""
        print("🚀 Starting Knowles Recruitment API Tests")
        print(f"🌐 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test API availability
        if not self.test_api_root():
            print("❌ API root endpoint failed - stopping tests")
            return False
        
        # Test form validation
        self.test_form_validation()
        self.test_email_validation()
        
        # Test all form types
        self.test_all_form_types()
        
        # Test data retrieval
        self.test_contact_retrieval()
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

def main():
    tester = KnowlesRecruitmentAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())