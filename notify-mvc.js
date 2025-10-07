/**
 * Universal Notify.js for MVC Frameworks
 * Simply include this file and call toastr(type, message) from anywhere
 */

// Auto-initialize toastr if not already defined
if (typeof window !== 'undefined' && !window.toastr) {
    // Create toastr function
    window.toastr = function(type, message, options) {
        // If called as a constructor
        if (this instanceof toastr) {
            return new Notify(type);
        }
        
        // Handle toastr('warning', 'message') format
        if (typeof type === 'string' && message) {
            const method = Notify[type.toLowerCase()];
            if (typeof method === 'function') {
                return method.call(Notify, message, options);
            }
            return Notify.info(message, options);
        }
        
        // Handle toastr('message') format (defaults to info)
        if (typeof type === 'string') {
            return Notify.info(type);
        }
        
        // Handle toastr({...}) format
        if (typeof type === 'object' && type !== null) {
            return new Notify(type);
        }
        
        return null;
    };

    // Attach all Notify methods to toastr
    const methods = ['success', 'error', 'warning', 'info', 'closeAll'];
    methods.forEach(method => {
        toastr[method] = function() {
            return Notify[method].apply(Notify, arguments);
        };
    });

    // Auto-initialize on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        // Check for flash messages in URL hash (for server-side redirects)
        if (window.location.hash) {
            try {
                const match = window.location.hash.match(/#notify-([a-z]+)=([^&]+)/i);
                if (match) {
                    const type = match[1];
                    const message = decodeURIComponent(match[2]);
                    toastr(type, message);
                    // Clean up URL
                    history.replaceState('', document.title, window.location.pathname + window.location.search);
                }
            } catch (e) {
                console.error('Error processing notification from URL:', e);
            }
        }

        // Initialize Notify
        Notify.init();
    });
}

// Export for Node.js/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.toastr || {};
}
