// Toastr Simple - A simplified version of toastr.js
// Compatible with: All modern browsers
// No jQuery required

(function (root, factory) {
    'use strict';
    
    // Universal Module Definition (UMD) pattern
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.toastr = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {
    'use strict';

    // Default options
    const defaults = {
        tapToDismiss: true,
        toastClass: 'toast',
        containerId: 'toast-container',
        positionClass: 'toast-top-right',
        timeOut: 5000,
        extendedTimeOut: 1000,
        closeButton: false,
        debug: false,
        newestOnTop: true,
        progressBar: false,
        preventDuplicates: false,
        onclick: null,
        showDuration: 300,
        hideDuration: 1000,
        showEasing: 'swing',
        hideEasing: 'swing',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut'
    };

    let container = null;
    let previousToast = null;
    
    // Create the toast container if it doesn't exist
    function getContainer(options) {
        if (container) return container;
        
        container = document.createElement('div');
        container.setAttribute('id', options.containerId);
        container.className = options.positionClass;
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('role', 'alert');
        document.body.appendChild(container);
        return container;
    }

    // Create a new toast
    function createToast(message, title, type, options) {
        // Don't show duplicate messages if preventDuplicates is true
        if (options.preventDuplicates && previousToast === message) {
            return null;
        }
        
        previousToast = message;
        
        const container = getContainer(options);
        const toast = document.createElement('div');
        const toastId = 'toast-' + Math.random().toString(36).substr(2, 9);
        
        toast.setAttribute('id', toastId);
        toast.className = `${options.toastClass} toast-${type}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        
        let html = '';
        
        if (title) {
            html += `<div class="toast-title">${escapeHtml(title)}</div>`;
        }
        
        html += `<div class="toast-message">${escapeHtml(message)}</div>`;
        
        if (options.closeButton) {
            html += '<button type="button" class="toast-close-button">×</button>';
        }
        
        if (options.progressBar) {
            html += '<div class="toast-progress"></div>';
        }
        
        toast.innerHTML = html;
        
        // Add to container
        if (options.newestOnTop) {
            container.insertBefore(toast, container.firstChild);
        } else {
            container.appendChild(toast);
        }
        
        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Auto-remove toast after timeout
        if (options.timeOut > 0) {
            setTimeout(() => {
                removeToast(toast, options);
            }, options.timeOut);
        }
        
        // Close button
        const closeButton = toast.querySelector('.toast-close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                removeToast(toast, options);
            });
        }
        
        // Click handler
        if (typeof options.onclick === 'function') {
            toast.addEventListener('click', (e) => {
                if (e.target !== closeButton) {
                    options.onclick();
                }
            });
        }
        
        return toast;
    }
    
    // Remove a toast
    function removeToast(toast, options) {
        if (!toast) return;
        
        toast.classList.remove('show');
        
        // Wait for animation to complete before removing
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
            
            // If container is empty, remove it
            if (container && container.children.length === 0) {
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                }
                container = null;
            }
        }, options.hideDuration);
    }
    
    // Escape HTML to prevent XSS
    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    
    // Main toastr function
    function toastr(type, message, title, options = {}) {
        // Handle different parameter patterns
        if (typeof message === 'object') {
            options = message;
            message = type;
            type = 'info';
        } else if (arguments.length === 1) {
            message = type;
            type = 'info';
        }
        
        // Merge options with defaults
        const mergedOptions = { ...defaults, ...options };
        
        // Create and return the toast
        return createToast(message, title, type, mergedOptions);
    }
    
    // Add shortcut methods
    toastr.success = (message, title, options) => toastr('success', message, title, options);
    toastr.info = (message, title, options) => toastr('info', message, title, options);
    toastr.warning = (message, title, options) => toastr('warning', message, title, options);
    toastr.error = (message, title, options) => toastr('error', message, title, options);
    
    // Clear toasts
    toastr.clear = () => {
        if (container) {
            container.innerHTML = '';
            if (container.parentNode) {
                container.parentNode.removeChild(container);
            }
            container = null;
        }
    };
    
    // Version
    toastr.version = '1.0.0';
    
    return toastr;
}));
