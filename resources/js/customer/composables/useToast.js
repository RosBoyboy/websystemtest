/**
 * useToast - Composable for displaying toast notifications
 * Usage in component:
 *   import { useToast } from '@/composables/useToast';
 *   const { notifySuccess, notifyError } = useToast();
 *   notifySuccess('Item added to cart!');
 */

let toastContainer = null;

export function useToast() {
  // Ensure container exists
  if (!toastContainer) {
    toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;';
      document.body.appendChild(toastContainer);
    }
  }

  const createToast = (message, type = 'info', duration = 4000) => {
    const toast = document.createElement('div');
    const bgColor = {
      success: 'bg-green-900/40 border-green-700',
      error: 'bg-red-900/40 border-red-700',
      warning: 'bg-yellow-900/40 border-yellow-700',
      info: 'bg-blue-900/40 border-blue-700'
    }[type];
    const textColor = {
      success: 'text-green-100',
      error: 'text-red-100',
      warning: 'text-yellow-100',
      info: 'text-blue-100'
    }[type];

    toast.innerHTML = `
      <div class="px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg border backdrop-blur-sm ${bgColor}">
        <span class="${textColor}">${message}</span>
      </div>
    `;
    
    toastContainer.appendChild(toast);
    toast.style.animation = 'fadeIn 0.3s ease-in-out';
    
    if (duration > 0) {
      setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    return toast;
  };

  return {
    notifySuccess: (msg, duration) => createToast(msg, 'success', duration ?? 3000),
    notifyError: (msg, duration) => createToast(msg, 'error', duration ?? 4000),
    notifyWarning: (msg, duration) => createToast(msg, 'warning', duration ?? 3500),
    notifyInfo: (msg, duration) => createToast(msg, 'info', duration ?? 3000),
    notify: (msg, type = 'info', duration) => createToast(msg, type, duration ?? 3000),
  };
}

