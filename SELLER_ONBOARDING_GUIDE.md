# Enhanced Seller Onboarding - Implementation Guide

## ✅ What's Been Implemented

A complete, production-ready seller registration system with:
- **6-step multi-step form** with all essential fields
- **Responsive UI** for mobile and desktop
- **Comprehensive validation** with inline error messages
- **File uploads** with preview (logo, ID, selfie, business permit)
- **Conditional logic** (business permit only for business type)
- **Admin approval workflow** for seller verification
- **Complete backend support** with proper file storage and database tracking

---

## 📋 Complete Feature List

### Frontend Form (6 Steps)
1. **Personal Information**
   - Full Name (required, min 3 chars)
   - Email (read-only, auto-filled)
   - Contact Number (required, phone format)

2. **Shop Details**
   - Shop Name (required)
   - Shop Description (optional)
   - Business Type (Individual/Business)
   - Shop Logo Upload (with preview)
   - Shop Address (required, textarea)

3. **Payment Information**
   - Bank Name (required)
   - Account Holder Name (required)
   - Account Number (required)
   - E-wallet Type (GCash/PayMaya/None)
   - E-wallet Number (conditional)

4. **Shipping & Delivery Setup**
   - Pickup Address (optional, defaults to shop)
   - Delivery Methods (self-delivery, third-party)
   - Shipping Fee (required, numeric)
   - Enable Order Tracking (toggle)

5. **Verification Documents**
   - Valid ID Upload (optional, with preview)
   - Selfie Upload (optional, with preview)
   - Business Permit (required if business type)

6. **Terms & Agreement**
   - Scrollable terms display
   - Acceptance checkbox (required)
   - Registration summary review

### Form Features
- ✅ Progress bar with step indicators
- ✅ Forward/backward navigation  
- ✅ Real-time field validation
- ✅ Inline error messages
- ✅ File preview with remove option
- ✅ Conditional field visibility
- ✅ Submit button disabled until valid
- ✅ Responsive mobile design
- ✅ Success page with admin approval status
- ✅ Beautiful dark/orange theme

---

## 🗄️ Database Changes

### Migration File
`database/migrations/2024_04_02_000000_add_onboarding_fields_to_sellers_table.php`

### New Fields Added (20+ columns)
```
Personal Information:
- full_name (string)
- contact_number (string)

Shop Details:
- shop_address (text)
- business_type (enum: individual/business)

Payment:
- bank_name (string)
- account_name (string)
- account_number (string)
- ewallet_type (enum: gcash/paymaya/none)
- ewallet_number (string)

Shipping:
- pickup_address (text)
- delivery_methods (JSON array)
- shipping_fee (decimal)
- enable_tracking (boolean)

Verification:
- valid_id_path (string)
- selfie_path (string)
- business_permit_path (string)

Terms:
- terms_accepted (boolean)
- terms_accepted_at (timestamp)

Status:
- onboarding_status (enum: not_started/in_progress/completed)
- onboarding_completed_at (timestamp)
```

---

## 🔌 API Endpoints

### Seller Endpoints
```
POST /api/seller/onboarding/submit
├─ Accepts: multipart/form-data
├─ Files: logo, valid_id, selfie, business_permit
└─ Returns: success with seller details + approval status
```

### Admin Endpoints (Existing)
```
GET /api/admin/sellers
├─ Params: status=pending/approved/rejected
└─ Returns: paginated seller list

GET /api/admin/sellers/{id}
└─ Returns: complete seller details with all onboarding info

PUT /api/admin/sellers/{id}/approve
└─ Sets status='approved', user role='seller'

PUT /api/admin/sellers/{id}/reject
└─ Sets status='rejected'
```

---

## 🚀 Setup Instructions

### Step 1: Delete Old Migration (if exists)
Delete this file if it was created:
```
database/migrations/2024_01_01_000001_add_onboarding_fields_to_sellers_table.php
```

### Step 2: Run Migration
```bash
php artisan migrate
```

This will add all 20+ new fields to the sellers table.

### Step 3: Update Routes (Already Done)
The route is already added to `routes/api.php`:
```php
Route::post('/seller/onboarding/submit', [SellerProfileController::class, 'submitOnboarding']);
```

### Step 4: Verify Component Import
Make sure the SellerOnboarding.vue component is imported in your router:
```javascript
// In resources/js/seller/router/index.js
{
  path: '/onboarding',
  component: () => import('../../pages/SellerOnboarding.vue'),
  name: 'seller-onboarding',
  meta: { requiresAuth: true, role: 'seller' }
}
```

### Step 5: Test the Workflow
1. Create a test seller account
2. Complete the onboarding form
3. View submission in Admin Dashboard
4. Admin approves/rejects the seller

---

## 📊 Seller Status Lifecycle

```
Registration
     ↓
┌────────────────────┐
│ status: pending    │
│ onboarding: not_started
└────────────────────┘
     ↓
[User fills form]
     ↓
┌────────────────────┐
│ status: pending    │
│ onboarding: completed
└────────────────────┘
     ↓
[Admin reviews]
     ↓
    ╱─────────────╲
   ╱               ╲
APPROVE          REJECT
  ↓                ↓
┌──────────┐    ┌──────────┐
│approved  │    │rejected  │
│Can sell  │    │Can retry │
└──────────┘    └──────────┘
```

---

## 📁 Files Modified/Created

### Created
- ✅ `resources/js/seller/pages/SellerOnboarding.vue` (600+ lines)
- ✅ `database/migrations/2024_04_02_000000_add_onboarding_fields_to_sellers_table.php`

### Modified
- ✅ `app/Models/Seller.php` (added fillable fields + casts)
- ✅ `app/Http/Controllers/Seller/SellerProfileController.php` (added submitOnboarding method)
- ✅ `routes/api.php` (added onboarding route)

---

## ✔️ Validation Rules

### Text Fields
- `full_name`: min 3, max 255 chars
- `contact_number`: phone format (7+ digits with +, -, (), spaces)
- `store_name`: min 3, max 255 chars
- `shop_address`: min 10, max 500 chars
- `bank_name`: max 255 chars
- `account_name`: max 255 chars
- `account_number`: max 50 chars
- `ewallet_number`: phone format (if selected)

### Numeric Fields
- `shipping_fee`: min 0, decimal

### File Uploads
- Logo: JPG, PNG, GIF, WebP (max 5MB)
- Valid ID: PDF, JPG, PNG (max 5MB)
- Selfie: JPG, PNG, GIF (max 5MB)
- Business Permit: PDF, JPG, PNG (max 5MB)

### Conditional Requirements
- Business Permit: **Required if business_type = 'business'**
- E-wallet Number: **Required if ewallet_type ≠ 'none'**
- Delivery Methods: **Minimum 1 method** must be selected

---

## 🎨 UI/UX Features

### Design
- Dark premium theme (navy/black background)
- Orange accent color (#ff6b35)
- Smooth animations and transitions
- Glass-morphism effect on form container

### Responsiveness
- Desktop: Full layout with side-by-side elements
- Tablet: Optimized card layout
- Mobile: Single-column, touch-friendly

### User Experience
- Clear progress indication
- Step-by-step guidance
- Real-time validation feedback
- File upload previews
- Success confirmation with next steps
- Accessible forms and inputs

---

## 🔐 Security Features

### File Upload Security
- File type validation (whitelist)
- File size limits (5MB max)
- Stored outside public web folder
- Files namespaced by seller

### Data Validation
- Server-side validation on all fields
- Phone number format check
- Conditional validation logic
- Required field enforcement

### Admin Verification
- Manual review required
- Document upload verification
- Status-based access control
- Audit trail (timestamps)

---

## 👨‍💼 Admin Management Panel Guide

### Accessing Pending Sellers
```bash
GET /api/admin/sellers?status=pending
```

### Reviewing Seller Details
```bash
GET /api/admin/sellers/{id}
```

Returns:
```json
{
  "id": 1,
  "user_id": 5,
  "store_name": "Fashion Hub",
  "store_description": "Quality clothing...",
  "full_name": "John Doe",
  "contact_number": "+63 912 345 6789",
  "business_type": "business",
  "shop_address": "123 Main St...",
  "bank_name": "BDO",
  "account_name": "John Doe",
  "account_number": "1234567890",
  "ewallet_type": "gcash",
  "ewallet_number": "+63 912 345 6789",
  "delivery_methods": ["self-delivery", "third-party"],
  "shipping_fee": "50.00",
  "enable_tracking": true,
  "valid_id_path": "sellers/verification/ids/...",
  "selfie_path": "sellers/verification/selfies/...",
  "business_permit_path": "sellers/verification/permits/...",
  "terms_accepted": true,
  "terms_accepted_at": "2024-04-02 10:30:00",
  "onboarding_status": "completed",
  "onboarding_completed_at": "2024-04-02 10:30:00",
  "status": "pending",
  "user": {...},
  "products": [...]
}
```

### Approving Seller
```bash
PUT /api/admin/sellers/{id}/approve
```
- Sets `status = 'approved'`
- Sets `user.role = 'seller'`
- Seller can now list products

### Rejecting Seller
```bash
PUT /api/admin/sellers/{id}/reject
```
- Sets `status = 'rejected'`
- Seller can reapply later

---

## 🛠️ Troubleshooting

### Migration Issues
- If migration fails, check database errors
- Ensure sellers table exists first
- Verify database user has ALTER permissions

### File Upload Issues
- Check storage permissions: `chmod -R 775 storage/`
- Verify disk config in `config/filesystems.php`
- Check max upload: `php.ini` settings

### Validation Errors
- Check browser console for detailed error messages
- Review backend logs: `storage/logs/laravel.log`
- Verify form data format in network tab

### Route Not Found
- Clear route cache: `php artisan route:cache`
- Verify AuthServiceProvider allows seller role access
- Check middleware registration in Kernel.php

---

## 📞 Support

For issues or questions:
1. Check storage/logs/laravel.log for backend errors
2. Review browser console for frontend errors
3. Verify all migrations have run: `php artisan migrate:status`
4. Test API endpoints with Postman/Insomnia

---

## 🎉 Next Steps

After seller is approved:
- Seller can view products dashboard
- Can create/edit/delete products
- Can receive and manage orders
- Can track earnings
- Can view shipment status

Enjoy your enhanced seller onboarding system! 🚀
