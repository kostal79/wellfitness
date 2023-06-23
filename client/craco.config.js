const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "@assets": path.resolve(__dirname, 'src/assets/'),
            "@components": path.resolve(__dirname, 'src/components/'),
            "@hooks": path.resolve(__dirname, 'src/hooks/'),
            "@layout": path.resolve(__dirname, 'src/layout/'),
            "@pages": path.resolve(__dirname, 'src/pages/'),
            "@redux": path.resolve(__dirname, 'src/redux/'),
            "@services": path.resolve(__dirname, 'src/services/'),
            "@styles": path.resolve(__dirname, 'src/styles/'),
            "@utils": path.resolve(__dirname, 'src/utils/'),
        }
    }
};