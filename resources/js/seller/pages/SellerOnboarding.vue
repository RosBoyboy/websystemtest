<template>
  <div class="seller-onboarding">
    <!-- Header -->
    <div class="onboarding-header">
      <h1>Complete Your Seller Registration</h1>
      <p>Set up your store to start selling on NurbanNext</p>
    </div>

    <!-- Success Page -->
    <div v-if="currentStep === 'success'" class="success-container">
      <div class="success-card">
        <div class="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2>Registration Submitted!</h2>
        <p class="success-message">
          Your seller registration has been submitted successfully. Our admin team will review your information
          and contact you within 24-48 hours.
        </p>
        <div class="status-info">
          <h3>What's Next?</h3>
          <ul>
            <li>✓ Your documents are being verified</li>
            <li>✓ We'll check your payment details</li>
            <li>✓ Admin approval will be sent to your email</li>
          </ul>
        </div>
        <button @click="goToDashboard" class="btn-primary">Go to Dashboard</button>
      </div>
    </div>

    <!-- Multi-step Form -->
    <div v-else class="form-container">
      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="step-indicators">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="['step-indicator', { active: currentStep === index, completed: currentStep > index }]"
            @click="goToStep(index)"
          >
            <span class="step-number">{{ index + 1 }}</span>
            <span class="step-label">{{ step }}</span>
          </div>
        </div>
      </div>

      <!-- Form Content -->
      <form @submit.prevent="submitForm" class="form-content">
        <!-- Step 0: Personal Information -->
        <div v-show="currentStep === 0" class="form-step">
          <h2>Personal Information</h2>
          <div class="form-group">
            <label for="fullName">Full Name *</label>
            <input
              id="fullName"
              v-model="formData.full_name"
              type="text"
              placeholder="Enter your full name"
              @blur="validateField('full_name')"
              @input="clearFieldError('full_name')"
            />
            <span v-if="errors.full_name" class="error-message">{{ errors.full_name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Email Address (Read-only)</label>
            <input
              id="email"
              v-model="userEmail"
              type="email"
              disabled
            />
            <small>This is your registered email address</small>
          </div>

          <div class="form-group">
            <label for="contactNumber">Contact Number *</label>
            <input
              id="contactNumber"
              v-model="formData.contact_number"
              type="tel"
              placeholder="+63 9XX XXX XXXX"
              @blur="validateField('contact_number')"
              @input="clearFieldError('contact_number')"
            />
            <span v-if="errors.contact_number" class="error-message">{{ errors.contact_number }}</span>
          </div>
        </div>

        <!-- Step 1: Shop Details -->
        <div v-show="currentStep === 1" class="form-step">
          <h2>Shop Details</h2>
          
          <div class="form-group">
            <label for="shopName">Shop Name *</label>
            <input
              id="shopName"
              v-model="formData.store_name"
              type="text"
              placeholder="Enter your shop name"
              @blur="validateField('store_name')"
              @input="clearFieldError('store_name')"
            />
            <span v-if="errors.store_name" class="error-message">{{ errors.store_name }}</span>
          </div>

          <div class="form-group">
            <label for="shopDescription">Shop Description</label>
            <textarea
              id="shopDescription"
              v-model="formData.store_description"
              placeholder="Tell customers about your shop..."
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="businessType">Business Type *</label>
            <select
              id="businessType"
              v-model="formData.business_type"
              @blur="validateField('business_type')"
              @input="clearFieldError('business_type')"
            >
              <option value="individual">Individual</option>
              <option value="business">Registered Business</option>
            </select>
            <span v-if="errors.business_type" class="error-message">{{ errors.business_type }}</span>
          </div>

          <div class="form-group">
            <label for="shopLogo">Shop Logo / Profile Image</label>
            <div class="file-upload-group">
              <div class="logo-preview" v-if="logoPreview">
                <img :src="logoPreview" alt="Shop Logo Preview" />
                <button type="button" @click="removeLogo" class="btn-remove">Remove</button>
              </div>
              <input
                id="shopLogo"
                type="file"
                accept="image/*"
                @change="handleLogoUpload"
              />
              <small>JPG, PNG, GIF, or WebP (Max 5MB)</small>
            </div>
          </div>

          <div class="form-group">
            <label for="shopAddress">Shop Address *</label>
            <textarea
              id="shopAddress"
              v-model="formData.shop_address"
              placeholder="Enter complete shop address"
              rows="3"
              @blur="validateField('shop_address')"
              @input="clearFieldError('shop_address')"
            ></textarea>
            <span v-if="errors.shop_address" class="error-message">{{ errors.shop_address }}</span>
          </div>
        </div>

        <!-- Step 2: Payment Information -->
        <div v-show="currentStep === 2" class="form-step">
          <h2>Payment Information</h2>

          <div class="form-section">
            <h3>Bank Account Details</h3>
            <div class="form-group">
              <label for="bankName">Bank Name *</label>
              <input
                id="bankName"
                v-model="formData.bank_name"
                type="text"
                placeholder="e.g., BDO, BPI, Metrobank"
                @blur="validateField('bank_name')"
                @input="clearFieldError('bank_name')"
              />
              <span v-if="errors.bank_name" class="error-message">{{ errors.bank_name }}</span>
            </div>

            <div class="form-group">
              <label for="accountName">Account Holder Name *</label>
              <input
                id="accountName"
                v-model="formData.account_name"
                type="text"
                placeholder="Name on bank account"
                @blur="validateField('account_name')"
                @input="clearFieldError('account_name')"
              />
              <span v-if="errors.account_name" class="error-message">{{ errors.account_name }}</span>
            </div>

            <div class="form-group">
              <label for="accountNumber">Account Number *</label>
              <input
                id="accountNumber"
                v-model="formData.account_number"
                type="text"
                placeholder="Bank account number"
                @blur="validateField('account_number')"
                @input="clearFieldError('account_number')"
              />
              <span v-if="errors.account_number" class="error-message">{{ errors.account_number }}</span>
            </div>
          </div>

          <div class="form-section">
            <h3>E-wallet Option</h3>
            <div class="form-group">
              <label for="ewalletType">E-wallet Type *</label>
              <select
                id="ewalletType"
                v-model="formData.ewallet_type"
                @blur="validateField('ewallet_type')"
                @input="clearFieldError('ewallet_type')"
              >
                <option value="none">None</option>
                <option value="gcash">GCash</option>
                <option value="paymaya">PayMaya</option>
              </select>
              <span v-if="errors.ewallet_type" class="error-message">{{ errors.ewallet_type }}</span>
            </div>

            <div v-if="formData.ewallet_type !== 'none'" class="form-group">
              <label for="ewalletNumber">E-wallet Number *</label>
              <input
                id="ewalletNumber"
                v-model="formData.ewallet_number"
                type="tel"
                :placeholder="`Enter your ${formData.ewallet_type} number`"
                @blur="validateField('ewallet_number')"
                @input="clearFieldError('ewallet_number')"
              />
              <span v-if="errors.ewallet_number" class="error-message">{{ errors.ewallet_number }}</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Shipping Setup -->
        <div v-show="currentStep === 3" class="form-step">
          <h2>Shipping & Delivery Setup</h2>

          <div class="form-group">
            <label for="pickupAddress">Pickup Address</label>
            <textarea
              id="pickupAddress"
              v-model="formData.pickup_address"
              placeholder="Leave blank to use shop address as pickup location"
              rows="3"
            ></textarea>
            <small>Where customers or couriers can pick up their orders</small>
          </div>

          <div class="form-group">
            <label>Delivery Methods *</label>
            <div class="checkbox-group">
              <div class="checkbox-item">
                <input
                  id="selfDelivery"
                  v-model="formData.delivery_methods"
                  type="checkbox"
                  value="self-delivery"
                />
                <label for="selfDelivery" class="checkbox-label">Self-delivery</label>
              </div>
              <div class="checkbox-item">
                <input
                  id="thirdParty"
                  v-model="formData.delivery_methods"
                  type="checkbox"
                  value="third-party"
                />
                <label for="thirdParty" class="checkbox-label">Third-party Courier</label>
              </div>
            </div>
            <span v-if="errors.delivery_methods" class="error-message">{{ errors.delivery_methods }}</span>
          </div>

          <div class="form-group">
            <label for="shippingFee">Shipping Fee (PHP) *</label>
            <input
              id="shippingFee"
              v-model.number="formData.shipping_fee"
              type="number"
              placeholder="0.00"
              min="0"
              step="0.01"
              @blur="validateField('shipping_fee')"
              @input="clearFieldError('shipping_fee')"
            />
            <span v-if="errors.shipping_fee" class="error-message">{{ errors.shipping_fee }}</span>
          </div>

          <div class="form-group">
            <label class="toggle-label">
              <input
                v-model="formData.enable_tracking"
                type="checkbox"
              />
              <span class="toggle-slider"></span>
              <span class="toggle-text">Enable Order Tracking</span>
            </label>
            <small>Allow customers to track their orders in real-time</small>
          </div>
        </div>

        <!-- Step 4: Verification Documents -->
        <div v-show="currentStep === 4" class="form-step">
          <h2>Verification Documents</h2>
          <p class="section-info">Upload documents to verify your identity and business legitimacy</p>

          <div class="form-group">
            <label for="validId">Valid ID (Optional)</label>
            <div class="file-upload-group">
              <div class="document-preview" v-if="validIdPreview">
                <img :src="validIdPreview" alt="Valid ID Preview" />
                <button type="button" @click="removeValidId" class="btn-remove">Remove</button>
              </div>
              <input
                id="validId"
                type="file"
                accept="image/*,application/pdf"
                @change="handleValidIdUpload"
              />
              <small>PDF, JPG, PNG (Max 5MB) - Passport, Driver's License, etc.</small>
            </div>
          </div>

          <div class="form-group">
            <label for="selfie">Selfie Upload (Optional)</label>
            <div class="file-upload-group">
              <div class="document-preview" v-if="selfiePreview">
                <img :src="selfiePreview" alt="Selfie Preview" />
                <button type="button" @click="removeSelfie" class="btn-remove">Remove</button>
              </div>
              <input
                id="selfie"
                type="file"
                accept="image/*"
                @change="handleSelfieUpload"
              />
              <small>JPG, PNG, GIF (Max 5MB) - Clear facial photo</small>
            </div>
          </div>

          <div v-if="formData.business_type === 'business'" class="form-group">
            <label for="businessPermit">Business Permit / License Registration *</label>
            <div class="file-upload-group">
              <div class="document-preview" v-if="permitPreview">
                <img :src="permitPreview" alt="Business Permit Preview" />
                <button type="button" @click="removePermit" class="btn-remove">Remove</button>
              </div>
              <input
                id="businessPermit"
                type="file"
                accept="image/*,application/pdf"
                @change="handlePermitUpload"
              />
              <span v-if="errors.business_permit" class="error-message">{{ errors.business_permit }}</span>
              <small>PDF, JPG, PNG (Max 5MB) - Business registration document</small>
            </div>
          </div>
        </div>

        <!-- Step 5: Terms & Agreement -->
        <div v-show="currentStep === 5" class="form-step">
          <h2>Terms & Agreement</h2>

          <div class="terms-content">
            <h3>seller Terms and Conditions</h3>
            <div class="terms-box">
              <p>
                By completing this registration, you agree to comply with all seller policies and guidelines.
                This includes:
              </p>
              <ul>
                <li>Maintaining accurate and honest product listings</li>
                <li>Processing orders within the specified timeframe</li>
                <li>Following all platform payment and shipping policies</li>
                <li>Providing quality customer service</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Protecting customer privacy and data</li>
              </ul>
              <p>
                Violation of these terms may result in account suspension or termination. For complete terms,
                please visit our <a href="#" target="_blank">full seller agreement</a>.
              </p>
            </div>
          </div>

          <div class="form-group checkbox-group">
            <div class="checkbox-item">
              <input
                id="termsAccepted"
                v-model="formData.terms_accepted"
                type="checkbox"
              />
              <label for="termsAccepted" class="checkbox-label">
                I agree to the seller terms and policies *
              </label>
            </div>
            <span v-if="errors.terms_accepted" class="error-message">{{ errors.terms_accepted }}</span>
          </div>

          <div class="review-section">
            <h3>Registration Summary</h3>
            <div class="summary-grid">
              <div class="summary-item">
                <span class="label">Shop Name</span>
                <span class="value">{{ formData.store_name }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Business Type</span>
                <span class="value">{{ formData.business_type }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Contact Number</span>
                <span class="value">{{ formData.contact_number }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Delivery Methods</span>
                <span class="value">{{ formData.delivery_methods.join(', ') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="form-navigation">
          <button
            v-if="currentStep > 0"
            type="button"
            @click="previousStep"
            class="btn-secondary"
          >
            ← Previous
          </button>

          <button
            v-if="currentStep < 5"
            type="button"
            @click="nextStep"
            class="btn-primary"
            :disabled="!isStepValid(currentStep)"
          >
            Next →
          </button>

          <button
            v-if="currentStep === 5"
            type="submit"
            class="btn-primary btn-submit"
            :disabled="!isFormValid || isSubmitting"
          >
            <span v-if="!isSubmitting">Submit Registration</span>
            <span v-else>Submitting...</span>
          </button>
        </div>

        <div v-if="submitError" class="alert alert-error">
          {{ submitError }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SellerOnboarding',
  data() {
    return {
      currentStep: 0,
      steps: [
        'Personal Info',
        'Shop Details',
        'Payment',
        'Shipping',
        'Verification',
        'Agreement',
      ],
      formData: {
        full_name: '',
        contact_number: '',
        store_name: '',
        store_description: '',
        business_type: 'individual',
        shop_address: '',
        bank_name: '',
        account_name: '',
        account_number: '',
        ewallet_type: 'none',
        ewallet_number: '',
        pickup_address: '',
        delivery_methods: [],
        shipping_fee: 0,
        enable_tracking: false,
        terms_accepted: false,
      },
      files: {
        logo: null,
        valid_id: null,
        selfie: null,
        business_permit: null,
      },
      previews: {
        logo: null,
        valid_id: null,
        selfie: null,
        business_permit: null,
      },
      errors: {},
      userEmail: '',
      isSubmitting: false,
      submitError: '',
    };
  },
  computed: {
    progressPercentage() {
      if (this.currentStep === 'success') return 100;
      return ((this.currentStep + 1) / this.steps.length) * 100;
    },
    logoPreview() {
      return this.previews.logo;
    },
    validIdPreview() {
      return this.previews.valid_id;
    },
    selfiePreview() {
      return this.previews.selfie;
    },
    permitPreview() {
      return this.previews.business_permit;
    },
    isFormValid() {
      return (
        this.formData.full_name &&
        this.formData.contact_number &&
        this.formData.store_name &&
        this.formData.shop_address &&
        this.formData.business_type &&
        this.formData.bank_name &&
        this.formData.account_name &&
        this.formData.account_number &&
        this.formData.ewallet_type &&
        (this.formData.ewallet_type === 'none' || this.formData.ewallet_number) &&
        this.formData.delivery_methods.length > 0 &&
        this.formData.shipping_fee >= 0 &&
        this.formData.terms_accepted &&
        (this.formData.business_type === 'individual' || this.files.business_permit)
      );
    },
  },
  methods: {
    isStepValid(step) {
      const validations = {
        0: () =>
          !this.errors.full_name &&
          !this.errors.contact_number &&
          this.formData.full_name &&
          this.formData.contact_number,
        1: () =>
          !this.errors.store_name &&
          !this.errors.shop_address &&
          this.formData.store_name &&
          this.formData.shop_address &&
          this.formData.business_type,
        2: () =>
          !this.errors.bank_name &&
          !this.errors.account_name &&
          !this.errors.account_number &&
          !this.errors.ewallet_type &&
          this.formData.bank_name &&
          this.formData.account_name &&
          this.formData.account_number &&
          (this.formData.ewallet_type === 'none' || this.formData.ewallet_number),
        3: () =>
          !this.errors.delivery_methods &&
          !this.errors.shipping_fee &&
          this.formData.delivery_methods.length > 0 &&
          this.formData.shipping_fee >= 0,
        4: () => true, // Verification is optional except business permit
        5: () => this.formData.terms_accepted,
      };

      return validations[step] ? validations[step]() : true;
    },
    validateField(fieldName) {
      const validators = {
        full_name: () => {
          if (!this.formData.full_name) return 'Full name is required';
          if (this.formData.full_name.length < 3) return 'Full name must be at least 3 characters';
          return '';
        },
        contact_number: () => {
          if (!this.formData.contact_number) return 'Contact number is required';
          if (!/^[0-9\s\-\+\(\)]{7,}$/.test(this.formData.contact_number)) {
            return 'Invalid phone number format';
          }
          return '';
        },
        store_name: () => {
          if (!this.formData.store_name) return 'Shop name is required';
          if (this.formData.store_name.length < 3) return 'Shop name must be at least 3 characters';
          return '';
        },
        shop_address: () => {
          if (!this.formData.shop_address) return 'Shop address is required';
          if (this.formData.shop_address.length < 10)
            return 'Please provide a complete address';
          return '';
        },
        business_type: () => {
          if (!this.formData.business_type) return 'Business type is required';
          return '';
        },
        bank_name: () => {
          if (!this.formData.bank_name) return 'Bank name is required';
          return '';
        },
        account_name: () => {
          if (!this.formData.account_name) return 'Account holder name is required';
          return '';
        },
        account_number: () => {
          if (!this.formData.account_number) return 'Account number is required';
          return '';
        },
        ewallet_type: () => {
          if (!this.formData.ewallet_type) return 'E-wallet type is required';
          return '';
        },
        ewallet_number: () => {
          if (this.formData.ewallet_type === 'none') return '';
          if (!this.formData.ewallet_number) return 'E-wallet number is required';
          if (!/^[0-9\s\-\+\(\)]{7,}$/.test(this.formData.ewallet_number)) {
            return 'Invalid e-wallet number format';
          }
          return '';
        },
        delivery_methods: () => {
          if (this.formData.delivery_methods.length === 0) {
            return 'Select at least one delivery method';
          }
          return '';
        },
        shipping_fee: () => {
          if (this.formData.shipping_fee === null || this.formData.shipping_fee === '') {
            return 'Shipping fee is required';
          }
          if (this.formData.shipping_fee < 0) return 'Shipping fee cannot be negative';
          return '';
        },
        business_permit: () => {
          if (this.formData.business_type === 'business' && !this.files.business_permit) {
            return 'Business permit is required for registered businesses';
          }
          return '';
        },
        terms_accepted: () => {
          if (!this.formData.terms_accepted) return 'You must accept the terms and conditions';
          return '';
        },
      };

      if (validators[fieldName]) {
        this.errors[fieldName] = validators[fieldName]();
      }
    },
    clearFieldError(fieldName) {
      this.errors[fieldName] = '';
    },
    goToStep(stepIndex) {
      if (stepIndex < this.currentStep) {
        this.currentStep = stepIndex;
      }
    },
    nextStep() {
      if (this.isStepValid(this.currentStep)) {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep += 1;
          this.$nextTick(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }
      }
    },
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
        this.$nextTick(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    },
    handleLogoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.logo = 'File size must be less than 5MB';
          return;
        }
        this.files.logo = file;
        this.createPreview(file, 'logo');
      }
    },
    handleValidIdUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.valid_id = 'File size must be less than 5MB';
          return;
        }
        this.files.valid_id = file;
        this.createPreview(file, 'valid_id');
      }
    },
    handleSelfieUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.selfie = 'File size must be less than 5MB';
          return;
        }
        this.files.selfie = file;
        this.createPreview(file, 'selfie');
      }
    },
    handlePermitUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.business_permit = 'File size must be less than 5MB';
          return;
        }
        this.files.business_permit = file;
        this.createPreview(file, 'business_permit');
      }
    },
    createPreview(file, type) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previews[type] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeLogo() {
      this.files.logo = null;
      this.previews.logo = null;
    },
    removeValidId() {
      this.files.valid_id = null;
      this.previews.valid_id = null;
    },
    removeSelfie() {
      this.files.selfie = null;
      this.previews.selfie = null;
    },
    removePermit() {
      this.files.business_permit = null;
      this.previews.business_permit = null;
    },
    async submitForm() {
      // Final validation
      this.validateField('terms_accepted');

      if (!this.isFormValid) {
        this.submitError = 'Please fill in all required fields correctly';
        return;
      }

      this.isSubmitting = true;
      this.submitError = '';

      try {
        const formDataToSubmit = new FormData();

        // Add form data
        Object.keys(this.formData).forEach((key) => {
          if (key === 'delivery_methods') {
            if (Array.isArray(this.formData[key])) {
              this.formData[key].forEach((method) => {
                formDataToSubmit.append('delivery_methods[]', method);
              });
            }
          } else if (typeof this.formData[key] === 'boolean') {
            formDataToSubmit.append(key, this.formData[key] ? '1' : '0');
          } else {
            const val = this.formData[key];
            formDataToSubmit.append(key, val !== null && val !== undefined && val !== '' ? val : '');
          }
        });

        // Add files
        if (this.files.logo) formDataToSubmit.append('logo', this.files.logo);
        if (this.files.valid_id) formDataToSubmit.append('valid_id', this.files.valid_id);
        if (this.files.selfie) formDataToSubmit.append('selfie', this.files.selfie);
        if (this.files.business_permit) formDataToSubmit.append('business_permit', this.files.business_permit);

        const response = await axios.post('/seller/onboarding/submit', formDataToSubmit, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201 || response.status === 200) {
          this.currentStep = 'success';
        }
      } catch (error) {
        console.error('Submission error:', error);
        if (error.response) {
          const data = error.response.data;
          if (data.errors) {
            this.errors = data.errors;
            this.submitError = 'Please fix the validation errors';
          } else {
            this.submitError = data.message || 'Failed to submit registration. Please check the errors above.';
          }
        } else if (error.request) {
          this.submitError = 'Network error: No response from server. Please check your connection.';
        } else {
          this.submitError = error.message || 'An error occurred. Please try again.';
        }
      } finally {
        this.isSubmitting = false;
      }
    },
    goToDashboard() {
      this.$router.push('/seller/dashboard');
    },
  },
  mounted() {
    // Get authenticated user email
    axios.get('/seller/profile')
      .then((response) => {
        if (response.data && response.data.user && response.data.user.email) {
          this.userEmail = response.data.user.email;
        }
      })
      .catch((error) => {
        console.warn('Could not fetch user email:', error);
        // Email will remain empty, user can see it's not loaded
      });
  },
};
</script>

<style lang="scss" scoped>
.seller-onboarding {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 40px 20px;

  .onboarding-header {
    text-align: center;
    margin-bottom: 50px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 700;
    }

    p {
      font-size: 1.1rem;
      color: #bbb;
    }
  }

  .success-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;

    .success-card {
      background: #0f3460;
      border-radius: 15px;
      padding: 50px;
      text-align: center;
      max-width: 500px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

      .success-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 30px;
        background: #28a745;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 50px;
          height: 50px;
          color: #fff;
        }
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .success-message {
        color: #bbb;
        line-height: 1.8;
        margin-bottom: 30px;
      }

      .status-info {
        background: rgba(255, 255, 255, 0.05);
        padding: 20px;
        border-radius: 10px;
        text-align: left;
        margin-bottom: 30px;

        h3 {
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            padding: 8px 0;
            color: #bbb;
          }
        }
      }

      .btn-primary {
        background: #ff6b35;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #ff5722;
        }
      }
    }
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;

    .progress-container {
      margin-bottom: 50px;

      .progress-bar {
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        margin-bottom: 30px;
        overflow: hidden;

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #f7931e);
          transition: width 0.3s ease;
        }
      }

      .step-indicators {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s;

          &.active,
          &.completed {
            opacity: 1;
          }

          .step-number {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            transition: all 0.3s;
          }

          &.active .step-number {
            background: #ff6b35;
            border-color: #ff6b35;
            transform: scale(1.1);
          }

          &.completed .step-number {
            background: #28a745;
            border-color: #28a745;
          }

          .step-label {
            font-size: 0.9rem;
            white-space: nowrap;
          }
        }
      }
    }

    .form-content {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      padding: 40px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);

      .form-step {
        animation: slideIn 0.3s ease;

        h2 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: #ff6b35;
        }

        .section-info {
          color: #bbb;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .form-section {
          margin-bottom: 30px;

          h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #fff;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 12px;
          }
        }
      }

      .form-group {
        margin-bottom: 25px;

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        input[type='text'],
        input[type='email'],
        input[type='tel'],
        input[type='number'],
        select,
        textarea {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s;

          &:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.12);
            border-color: #ff6b35;
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
          }

          &:disabled {
            background: rgba(255, 255, 255, 0.05);
            opacity: 0.6;
            cursor: not-allowed;
          }

          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }

        small {
          display: block;
          margin-top: 6px;
          color: #999;
          font-size: 0.85rem;
        }

        .error-message {
          display: block;
          color: #ff6b6b;
          font-size: 0.85rem;
          margin-top: 6px;
        }
      }

      .file-upload-group {
        border: 2px dashed rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        transition: all 0.3s;

        &:hover {
          border-color: #ff6b35;
          background: rgba(255, 107, 53, 0.05);
        }

        input[type='file'] {
          cursor: pointer;

          &::file-selector-button {
            background: #ff6b35;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s;

            &:hover {
              background: #ff5722;
            }
          }
        }

        .logo-preview,
        .document-preview {
          margin-bottom: 15px;
          position: relative;

          img {
            max-width: 100%;
            max-height: 200px;
            border-radius: 8px;
            display: block;
            margin: 0 auto;
          }

          .btn-remove {
            margin-top: 10px;
            background: #dc3545;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: background 0.3s;

            &:hover {
              background: #c82333;
            }
          }
        }
      }

      .checkbox-group {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;

          input[type='checkbox'] {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }

          .checkbox-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin: 0;
            font-weight: normal;
          }
        }
      }

      .toggle-label {
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        margin: 0;
        font-weight: normal;

        input[type='checkbox'] {
          position: relative;
          width: 50px;
          height: 28px;
          appearance: none;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.3s;

          &:checked {
            background: #28a745;
          }

          &:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
          }
        }

        .toggle-text {
          flex: 1;
        }
      }

      .terms-content {
        background: rgba(255, 255, 255, 0.05);
        border-left: 4px solid #ff6b35;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;

        h3 {
          margin-bottom: 15px;
          color: #ff6b35;
        }

        .terms-box {
          max-height: 300px;
          overflow-y: auto;
          padding-right: 10px;

          &::-webkit-scrollbar {
            width: 8px;
          }

          &::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;

            &:hover {
              background: rgba(255, 255, 255, 0.3);
            }
          }

          p {
            color: #bbb;
            line-height: 1.8;
            margin-bottom: 15px;

            a {
              color: #ff6b35;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }

          ul {
            list-style-position: inside;
            color: #bbb;
            line-height: 1.8;
            margin-left: 15px;

            li {
              margin-bottom: 8px;
            }
          }
        }
      }

      .review-section {
        background: rgba(255, 107, 53, 0.1);
        border-radius: 10px;
        padding: 20px;
        margin-top: 30px;

        h3 {
          margin-bottom: 15px;
          color: #ff6b35;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;

          .summary-item {
            display: flex;
            flex-direction: column;

            .label {
              color: #999;
              font-size: 0.85rem;
              margin-bottom: 5px;
            }

            .value {
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }

      .form-navigation {
        display: flex;
        gap: 15px;
        justify-content: space-between;
        margin-top: 40px;
        padding-top: 30px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        button {
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }

        .btn-primary {
          background: #ff6b35;
          color: white;
          min-width: 150px;

          &:hover:not(:disabled) {
            background: #ff5722;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
          }

          &.btn-submit {
            min-width: 200px;
          }
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);

          &:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.15);
          }
        }
      }

      .alert {
        padding: 15px 20px;
        border-radius: 8px;
        margin-top: 20px;
        font-size: 0.95rem;

        &.alert-error {
          background: rgba(220, 53, 69, 0.15);
          border-left: 4px solid #dc3545;
          color: #ff6b6b;
        }
      }
    }
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .seller-onboarding {
    padding: 20px;

    .onboarding-header {
      margin-bottom: 30px;

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    .form-container {
      .progress-container {
        .step-indicators {
          .step-indicator {
            .step-number {
              width: 35px;
              height: 35px;
              font-size: 0.85rem;
            }

            .step-label {
              font-size: 0.75rem;
            }
          }
        }
      }

      .form-content {
        padding: 25px;

        .form-section h3 {
          font-size: 1rem;
        }

        .form-navigation {
          flex-direction: column;
          gap: 10px;

          button {
            width: 100%;
          }
        }
      }
    }

    .success-container {
      .success-card {
        padding: 30px;
      }
    }
  }
}
</style>
