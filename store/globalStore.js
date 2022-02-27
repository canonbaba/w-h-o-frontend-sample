const state = () => ({
    slideSubMenu: {
        skincare: '',
        makeup: '',
        level3: '',
    },
    level1_name: '',
    level2_name: '',
    level3_data: '',
    skincare: '',
    makeup: '',
    showSearchPopup: false,
    slideMenu: false,
    slideMenuItemListShow: false,
    slideMenuItemListIncludeSubcate: false,
    slideMenuItemListData: '',
});

// to handle actions
const actions = {
    async getMenuData(context) {
        this.$axios.get('/api/filters').then((response) => {
            context.commit('initMenuData', response);
        }).catch((error) => {
            console.log(error);
        });
    },
};

const mutations = {
    initMenuData(state, menuDate) {
        // state.skincare = this.$i18n.t('skincare');
        // state.makeup = this.$i18n.t('makeup');

        state.skincare = menuDate.data.skincare;
        state.makeup = menuDate.data.makeup;

        console.log(menuDate.data);
    },
    toggleSearchPopup(state) {
        state.showSearchPopup = !state.showSearchPopup;

        if (state.showSearchPopup) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    },
    hideSearchPopup(state) {
        state.showSearchPopup = false;

        if (state.showSearchPopup) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    },
    toggleSlideMenu(state, target) {
        state.slideMenu = !state.slideMenu;
        Object.keys(state.slideSubMenu).forEach((key) => {
            state.slideSubMenu[key] = '';
        });

        // state.skincare = this.$i18n.t('skincare');
        // state.makeup = this.$i18n.t('makeup');
        if (target) {
            if (target.level1 !== 'makeup') {
                state.slideSubMenu[target.target] = 'active';
            }
            state.slideSubMenu[target.level1] = 'active';

            if (target.level2) {
                state.level2_name = target.level2;
                // state.level3_data = this.$i18n.t(`${target.level1}.${target.level2}`);
                state.level3_data = state[target.level1].contains[target.level2];
            }
        }

        // hideSearchPopup
        state.showSearchPopup = false;
        if (state.showSearchPopup) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    },
    toggleSlideMenuItemList(state, target) {
        state.slideMenuItemListShow = !state.slideMenuItemListShow;

        if (target) {
            if (target.subcategory) {
                state.slideMenuItemListIncludeSubcate = true;
                state.slideMenuItemListData = state[target.maincategory].contains[target.subcategory].contains;
            } else {
                state.slideMenuItemListData = state[target.maincategory].contains;
            }
            console.log(state.slideMenuItemListData);
        } else {
            state.slideMenuItemListIncludeSubcate = false;
            state.slideMenuItemListData = '';
        }

        // // hideSearchPopup
        // state.showSearchPopup = false;
        // if (state.showSearchPopup) {
        //     document.documentElement.style.overflow = 'hidden';
        // } else {
        //     document.documentElement.style.overflow = 'auto';
        // }
    },
    hideSlideMenu(state) {
        state.slideMenu = false;
    },
    toSlideSubMenu(state, target) {
        state.slideSubMenu[target.target] = 'active';

        if (target.level2) {
            state.level1_name = target.level1;
            state.level2_name = target.level2;
            // state.level3_data = state[target.level1][target.level2];
            state.level3_data = state[target.level1].contains[target.level2];
        }
    },
    backToPrevSlideMenu(state, target) {
        state.slideSubMenu[target] = '';
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
