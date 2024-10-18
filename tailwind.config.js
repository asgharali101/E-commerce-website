/*  @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./shop.html", // Path to your shop page
    "./about.html", // Path to your about page
    "./contact.html", // Path to your contact page
    "./src/**/*.{js,ts,jsx,tsx}",
],

    theme: {
     
      
      extend:{
        screens:{
          'xs': {'min':'320px','max':'750'},  
           },
        colors:{
            blacknew:"#0F1419",
            bg:"from-sky-500 to-indigo-500",
         },
         container: {
        center: true,
         },

         keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        animation: {
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        }
    }
     
    },
 
  
  plugins: [],
}


