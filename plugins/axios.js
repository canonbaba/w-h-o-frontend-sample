import Swal from 'sweetalert2';

export default ({ app, $axios }) => {
    $axios.onError((err) => {
        if (err.response.status === 401 && app.$auth.loggedIn) {
            Swal.fire({
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: app.i18n.t('ok'),
                text: app.i18n.t('autoLogout'),
            }).then(() => {
                app.$auth.logout();
            });
        }
        return Promise.reject(err);
    });
    $axios.onRequest(async (config) => {
        // console.log('config :>> ', config);
        if (config.method !== 'get' && !app.$auth.loggedIn) {
            await $axios.get('/sanctum/csrf-cookie', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            });
        }
        $axios.setHeader('Accept-Language', app.i18n.locale);
        return config;
    });
};
