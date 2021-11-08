module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // height: {
    //   lg: '7rem',
    //   '60vh': '60vh',
    // },
    extend: {
      backgroundImage: (theme) => ({
        'profile-img': "url('../static/profile_img.JPG')",
        'profile-img-hover': "url('../static/profile_img_hover.JPG')",
      }),
    },
  },
  variants: {
    // extend: {},
    backgroundImage: ['responsive', 'hover'],
    backgroundColor: ['hover'],
    borderWidth: ['hover'],
    borderColor: ['hover'],
    color: ['hover'],
  },
  plugins: [],
};
