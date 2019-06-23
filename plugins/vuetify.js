import Vue from 'vue'
import Vuetify, {
  VApp,
  VToolbar,
  VBtn,
  VSpacer,
  VToolbarTitle,
  VToolbarSideIcon,
  VToolbarItems,
  VIcon,
  VTab,
  VMenu,
  VTooltip,
  VList,
  VListTile,
  VListTileTitle,
  VListTileContent,
  VNavigationDrawer,
  VTextField,
  VAutocomplete


} from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  components: {
    VApp,
    VToolbar,
    VBtn,
    VSpacer,
    VToolbarTitle,
    VToolbarSideIcon,
    VToolbarItems,
    VIcon,
    VTab,
    VMenu,
    VTooltip,
    VList,
    VListTile,
    VListTileTitle,
    VListTileContent,
    VNavigationDrawer,
    VTextField,
    VAutocomplete
  }
})
