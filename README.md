## Write-Up

### Summary

This project was done because I wasn't satisfied with my current portfolio. My last portfolio was done with Bootstrap, and plain CSS and JavaScript. While that was suitable, I wanted to create something with a different framework and CSS library.

I've also learned a lot about CSS since I built my first portfolio, and wanted to start from scratch with more maintanable CSS.

I decided to go with Tailwind because I built out a project using it and really liked the fact that I didn't have to name CSS classes anymore. Although I felt that at first Tailwind was just a useless abstraction to vanilla CSS, I realized after using it that it was just streamlining vanilla CSS. In short, if you don't have a decent understanding of CSS, Tailwind is not going to be a workaround for that. You still have to write normal CSS, but just use utility classes instead of a CSS file.

I also wanted access to components, and in my research I found out about DaisyUI. DaisyUI is a component library built around Tailwind so I felt that it was perfect for this project. I really liked the look and ease of use for the components, and also liked that by using its theming system you can easily change the theme of your project.

I've also been building my projects out in TypeScript lately because I appreciate the strictness and cleanliness with which you have to write out your logic. It's also something that a lot of companies have switched to and I'd like to keep my skills up-to-date.

Lastly, I decided to use NextJS and Vercel for the framework because of the SEO superiority to create-react-app. I think it would be great if someone was able to find my portfolio on Google or another search engine, as visibility always helps for exposure to more opportunities.

I also have heard a lot about Next.js and Vercel and thought it would be cool to check out what it's all about. It seemed really cool and I enjoyed working with them.

### Challenges

I had a few challenges when it came to making this portfolio. One issue that I had immediately was that Tailwind and DaisyUI don't have a grid system, so I had to brush up on my flexbox and grid skills. I really liked having to use these though because I like to work with the underlying CSS. For the featured project cards, I used flexbox, and for the other project cards, I used a grid system.

Another issue that I ran into was uploading the Resume section and pictures. Although it didn't take that long to fix, it was a bit challenging to find out where to put the assets, as NextJS doesn't allow you to have assets within the pages section. I had to put my resume and project pictures in the public folder and link to them with a '/'.

The biggest issue I faced was the transition animation on scroll with the navbar. While I was able to use animate.css and a package called react-animation-on-scroll for the projects, this wasn't sufficient for the navbar. I had to learn how to use a package called framer motion to deal with the state change of the navbar going from hidden to not hidden. Initially it was pretty easy to get the navbar to show and not show based on scroll, but the animation was choppy. After a lot of trial and error I realized I had an issue with the Z-index of the navbar. There was a stacking context issue that I dealt with by defining the class names within the animation div itself rather than defining another div inside it.

###Screenshots

![Screen Shot 2022-11-16 at 7 12 13 PM](https://user-images.githubusercontent.com/82760568/202346086-bb12d556-0328-4fc0-9348-9ab175f1100f.png)
![Screen Shot 2022-11-16 at 7 12 23 PM](https://user-images.githubusercontent.com/82760568/202346097-6937e01d-7d4a-4169-bae3-524ba730d646.png)
<img width="1239" alt="Screen Shot 2022-11-16 at 7 12 38 PM" src="https://user-images.githubusercontent.com/82760568/202346105-583d9b68-d42f-4a64-9d82-5f07ae8f4626.png">

## Installation

If you'd like to run this project locally, then first git clone.

After that, run npm i in the terminal.

Then, run the development server in the terminal:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
