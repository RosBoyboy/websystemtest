<template>
  <footer style="background:#2a2a2a;padding:80px 48px 40px;border-top:1px solid rgba(240,236,227,0.06);">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:60px;max-width:1280px;margin-left:auto;margin-right:auto;" class="footer-inner-grid">
      <!-- Brand -->
      <div>
        <div style="font-family:'Bebas Neue',cursive;font-size:40px;letter-spacing:0.1em;margin-bottom:16px;">
          <span style="color:#f97316;">Nurban</span><span style="color:#f0ece3;">Nxt</span>
        </div>
        <p style="font-size:13px;line-height:1.8;font-weight:300;color:rgba(240,236,227,0.4);max-width:260px;margin-bottom:24px;">
          Aesthetic clothing for the culturally wired. We design for those who live ahead of the trend.
        </p>
        <div style="display:flex;gap:10px;">
          <a v-for="soc in ['IG','TK','FB','PT']" :key="soc" href="#" class="footer-social">{{ soc }}</a>
        </div>
      </div>
      <!-- Shop -->
      <div>
        <div class="footer-col-title">Shop</div>
        <ul style="list-style:none;padding:0;margin:0;">
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'products' }" class="footer-link">All Products</router-link></li>
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="footer-link">Featured</router-link></li>
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'products', query: { sort: 'latest' } }" class="footer-link">New Arrivals</router-link></li>
          <li><router-link :to="{ name: 'products', query: { sale: 1 } }" class="footer-link">Sale</router-link></li>
        </ul>
      </div>
      <!-- Account -->
      <div>
        <div class="footer-col-title">Account</div>
        <ul style="list-style:none;padding:0;margin:0;">
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'login' }" class="footer-link">Sign In</router-link></li>
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'register' }" class="footer-link">Create Account</router-link></li>
          <li style="margin-bottom:10px;"><router-link :to="{ name: 'orders' }" class="footer-link">Order Tracking</router-link></li>
          <li><router-link :to="{ name: 'account' }" class="footer-link">My Profile</router-link></li>
        </ul>
      </div>
      <!-- Company -->
      <div>
        <div class="footer-col-title">Company</div>
        <ul style="list-style:none;padding:0;margin:0;">
          <li style="margin-bottom:10px;"><a href="/seller" class="footer-link">Seller Portal</a></li>
          <li style="margin-bottom:10px;"><a href="#" class="footer-link">About Us</a></li>
          <li style="margin-bottom:10px;"><a href="#" class="footer-link">Contact</a></li>
          <li><a href="#" class="footer-link">Sustainability</a></li>
        </ul>
      </div>
    </div>

    <div style="max-width:1280px;margin:0 auto;border-top:1px solid rgba(240,236,227,0.06);padding-top:28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <span style="font-size:12px;color:rgba(240,236,227,0.28);font-weight:300;">© {{ year }} NurbanNxt. All rights reserved. Designed for the bold.</span>
      <div style="display:flex;gap:8px;">
        <span v-for="pay in ['VISA','MASTERCARD','GCASH','MAYA','COD']" :key="pay"
          style="background:rgba(240,236,227,0.06);padding:4px 10px;font-size:9px;font-family:'Syne',sans-serif;font-weight:600;letter-spacing:0.1em;color:rgba(240,236,227,0.3);border:1px solid rgba(240,236,227,0.08);">
          {{ pay }}
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-col-title {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f0ece3;
  margin-bottom: 18px;
}
.footer-link {
  font-size: 13px;
  font-weight: 300;
  color: rgba(240,236,227,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover { color: #f97316; }
.footer-social {
  width: 34px; height: 34px;
  border: 1px solid rgba(240,236,227,0.18);
  display: flex; align-items: center; justify-content: center;
  color: rgba(240,236,227,0.45);
  font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}
.footer-social:hover {
  background: #f97316;
  border-color: #f97316;
  color: #0a0a0a;
}
@media (max-width: 768px) {
  .footer-inner-grid { grid-template-columns: 1fr 1fr !important; }
}
</style>

<script>
export default {
  name: 'CustomerFooter',
  computed: {
    year() { return new Date().getFullYear(); },
  },
};
</script>
