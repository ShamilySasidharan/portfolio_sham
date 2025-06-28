
# installation
    npx create - next-app@latest
# install shadcn
    npx shadcd@latest init
# install the components of of shadcn
    npx shadcn-ui@latest add input button scroll-area select sheet tabs textarea tooltip

# Tailwind v4 configuration
 - The tailwind.config.js file is removed
 - using any libraries for the ui then add them globals.css
     @plugin 'daisui'
- using shadcd as library then dont need to add them it is automatically added in nextjs
- all the css are now added in the globals.css
- screen size 
    -> globals.css > @theme{} add these
  --breakpoint-sm :640px;
  --breakpoint-md: 768px;
  --breakpoint-lg:960px;
  --breakpoint-xl:1200px;
- font 
    - in :root add
       font-family: "JetBrains Mono", monospace;
- it has something to do with the layout.js file  as well but am not sure because am new


