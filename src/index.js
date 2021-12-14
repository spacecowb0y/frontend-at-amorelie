import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  CodePane,
  ListItem,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Text,
  Box,
  Notes,
  Link,
  Appear,
  Image,
  OrderedList,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "#fff",
    secondary: "#2cd5c4",
    tertiary: "#0b2f61",
    quaternary: "#d8ffab",
    senary: "#0b2f61",
    septenary: "#452861",
    octonary: "#2cd5c4",
  },
  fonts: {
    header: '"Roboto Condensed", "Avenir Next", sans-serif',
    text: "system-ui, sans-serif",
  },
};
// SPECTACLE_CLI_THEME_END

import nodeModulesMeme from "../public/node_modules.png";
import bgTheEnd from "../public/end.webp";
import bgIntro from "../public/bg.webp";
import bgAmorelie from "../public/amorelie.webp";
import bgBath from "../public/bg2.webp";
import magentoMeme from "../public/magento.jpg";
import storybook from "../public/storybook.png";
import tsErrorImage from "../public/typescript_error_id.png";
import jsErrorImage from "../public/js-error.png";

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide
      backgroundImage={`url(${bgIntro})`}
      backgroundSize="cover"
      backgroundOpacity={0.4}
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>
          FRONTEND TECH STACK FOR A MODERN E-COMMERCE: FROM MAGENTO TO HEADLESS
        </Heading>
        <Appear>
          <Text
            textAlign="center"
            style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}
          >
            An overview to the future of our next generation frontend
            architecture at Amorelie.
          </Text>
        </Appear>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Heading>$ WHOAMI</Heading>
      <Text>
        My name is{" "}
        <Link href="//diego.earth" target="_blank" rel="external">
          Diego
        </Link>
        . I first got into web dev in the early 2000’s, and only as I type this
        sentence do I realize how long ago that was.
      </Text>
      <Text>
        Back then <CodeSpan>{"<HTML/>"}</CodeSpan> tags were written all in
        caps, layouts were built using <CodeSpan>{"<TABLES/>"}</CodeSpan> and
        transparent PNGs weren’t supported for most browsers 😅.
      </Text>
      <CodePane language="html">{`
        <BODY>
          <TABLE WIDTH=100% BORDER=0 CELLSPACING=8 CELLPADDING=0>
              <TR>
                  <TD COLSPAN=2><!--#include virtual="/header.html" --></TD>
              </TR>
              <TR>
                  <TD WIDTH=20%><!--#include virtual="/navigation.html" --></TD>
                  <TD>(actual page content goes here)</TD>
              </TR>
          </TABLE>
        </BODY>
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHICH TECH STACK ARE WE GONNA REVIEW TODAY?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <Link href="//webpack.js.org" target="_blank" rel="external">
              Webpack
            </Link>{" "}
            for <strong>bundling</strong> our javascript libraries and
            stylesheets
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Link href="//reactjs.org" target="_blank" rel="external">
              React
            </Link>{" "}
            and{" "}
            <Link href="//storybook.js.org" target="_blank" rel="external">
              Storybook
            </Link>{" "}
            for <strong>building and showcasing</strong> our component library
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            And{" "}
            <Link href="//storybook.js.org" target="_blank" rel="external">
              Next.js
            </Link>{" "}
            to <strong>smash it all together</strong>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>BUT BEFORE WE TALK ABOUT THE FUTURE...</Heading>
      <Text>
        ... let’s have a quick look to the current tech stack of our storefront,
        some of the struggles that the frontend team is going through and let’s
        talk about the developer experience of adding or maintaining features in
        our current codebase.
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>OUR CURRENT STACK</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Linux, Nginx, MySQL, PHP (LEMP stack) to run{" "}
            <Link href="//magento.com" target="_blank" rel="external">
              Magento 2
            </Link>{" "}
            📦 (most of the time through Docker 🐳) for local development 👨🏻‍💻
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>HTML and CSS preprocessed with LESS</ListItem>
        </Appear>
        <Appear>
          <ListItem>jQuery and Knockout</ListItem>
        </Appear>
        <Appear>
          <ListItem><s>Grunt</s></ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>THE CHALLENGES THAT WE FACE TODAY</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Our storefront is a <strong>monolith application</strong> based on
            PHP where the frontend architecture relies entirely on Magento 2 and
            its internal building tools, templating and rendering engines
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The development cycle along with the CI/CD strategy for{" "}
            <strong>
              frontend is tied to the backend and its infrastructure
            </strong>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Improving the <strong>performance (CWV), SEO and the UX</strong> of
            our storefront is becoming harder and harder
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide backgroundImage={`url(${magentoMeme})`} backgroundSize="contain">
      <Notes></Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading>MODULE BUNDLERS</Heading>
      </FlexBox>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${nodeModulesMeme})`}
      backgroundSize="contain"
      backgroundColor="white"
    >
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>GRUNT VS WEBPACK</Heading>
      <Text>
        In the past, you’ve needed to use several tools to automate the
        development process, e.g. Browserify + Gulp or Grunt + a lot of plugins.
        Webpack is powerful enough to do what all these tools combined can do
        and more!
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>THE BENEFITS OF USING WEBPACK</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Detect the code you don’t use to exclude it while combining files
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Serialize the code and load it only when it’s necessary
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Monitor file alterations</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Transpile code to ES5 (thanks to{" "}
            <Link href="//babeljs.io" target="_blank" rel="external">
              Babel
            </Link>{" "}
            plugins for webpack)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Start a web server 🚀</ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>REACT.JS</Heading>
      <Text>
        React is a javascript library to build UIs made by Facebook in 2013. We
        can use it to create components that represent{" "}
        <strong>logical reusable parts of the UI</strong>.
      </Text>
      <CodePane language="jsx">{`
        <Header>
          <Logo icon="🍆" />
          <Title text="Hello, Amorelie!" />
          <Button label="Click me" onClick= { () => doSomething() } />
        </Header>
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHAT IS A COMPONENT?</Heading>
      <Text>
        Is just a javascript function where the return value is our UI (HTML)
        which is written in a special syntax call <CodeSpan>JSX</CodeSpan>.
      </Text>
      <CodePane language="jsx">{`
        function Item() {
          return <p>Hello, Amorelie!</p>
        }
       
        <Item />
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>HOW TO PASS DATA TO A COMPONENT?</Heading>
      <Text>
        If we want to pass data to the component, we use{" "}
        <CodeSpan>props</CodeSpan> to render it into the component and if the
        value changes: 💥
      </Text>
      <CodePane language="jsx">{`
        function Item(props) {
          return <p>{props.text}</p>
        }
       
        <Item text="T-shirt (XL) 👕" />
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>HOW TO GIVE A COMPONENT AN INTERNAL STATE?</Heading>
      <Text>
        The answer is we can use the <CodeSpan>useState()</CodeSpan> hooks.
      </Text>
      <CodePane language="jsx">{`
        import { useState } from 'react';

        const [count, setCount] = useState(0);

        return <>
          <p>{count}</p>
          <button onClick={ () => setCount(count + 1)}>+</button>
        </>
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHY REACT?</Heading>
      <Text>
        A great reason to use React.js is not the library itself but its massive
        ecosystem.
      </Text>
      <UnorderedList>
        <ListItem>
          Do you need static site? You have{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Gatsby
          </Link>
          .
        </ListItem>
        <ListItem>
          Server side rendering? You have{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Next
          </Link>
          .
        </ListItem>
        <ListItem>
          Animations?{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Spring
          </Link>
          . Forms?{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Formik
          </Link>
          .
        </ListItem>
        <ListItem>
          State managment?{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Redux
          </Link>
          ,{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Mobx
          </Link>
          ,{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Flux
          </Link>
          ,{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Xstate
          </Link>
          ,{" "}
          <Link href="//babeljs.io" target="_blank" rel="external">
            Recoil
          </Link>
          .
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>NEXT.JS</Heading>
      <Text>
        Next.js gives us the best developer experience with all the features we
        need for production: <strong>hybrid static & server rendering</strong>,{" "}
        <strong>TypeScript support</strong>, <strong>smart bundling</strong>,{" "}
        <strong>route pre-fetching</strong>, and more.{" "}
        <strong>No config needed</strong>.
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading>SSG vs SSR vs ISR</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>STATIC SITE GENERATION</Heading>
      <Text>
        Render <strong>all pages</strong> at <strong>build time</strong>. Use
        case: blog or static site.
      </Text>
      <CodePane language="jsx">{`
        export async function getStaticProps() {
          const req = await fetch("/some-api");
          const product = await req.json();

          return {
            props: { product },
          }
        }

        export default function Product({ product }) {
          return <h1>Product { product.name }</h1>
        }
      `}</CodePane>
    </Slide>
    <Slide>
      <Heading>SERVER-SIDE RENDERING</Heading>
      <Text>
        Generate <strong>each page</strong> at <strong>request time</strong>.
        Use case: application with changing data.
      </Text>
      <CodePane language="jsx">{`
        export async function getServerSideProps() {
          const req = await fetch("/some-api");
          const product = await req.json();

          return {
            props: { product },
          }
          ...
        }
      `}</CodePane>
    </Slide>
    <Slide>
      <Heading>INCREMENTAL STATIC REGENERATION</Heading>
      <Text>
        Re-generate single pages in the background. Use case: Online shop.
      </Text>
      <CodePane language="jsx">{`
        export async function getServerSideProps() {
          const req = await fetch("/some-api");
          const product = await req.json();

          return {
            props: { product },
            revalidate: 30
          }
          ...
        }
      `}</CodePane>
    </Slide>
    <Slide>
      <Heading>THE BENEFITS OF NEXT.JS</Heading>
      <UnorderedList>
        <ListItem>Built-in support for internationalized (i18n) routing.</ListItem>
        <ListItem>It includes a variety of built-in performance optimizations to help us achieve good Core Web Vitals.</ListItem>
        <ListItem>File-system routing</ListItem>
        <ListItem>Optimized bundle splitting algorithm created by the Google Chrome team.</ListItem>
        <ListItem>Typescript support</ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>TYPESCRIPT</Heading>
      <Text>
        TypeScript is a strongly typed programming language that{" "}
        <strong>validates your JS ahead of time</strong> with static type
        checking.
      </Text>
      <CodePane language="typescript">{`
        import * as React from "react";
 
        interface UserThumbnailProps {
          img: string;
          alt: string;
          url: string;
        }
        
        export const UserThumbnail = (props: UserThumbnailProps) =>
          <a href={props.url}>
            <img src={props.img} alt={props.alt} />
          </a>
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHILE IN JAVASCRIPT</Heading>
      <Text>
        You can do all kind of crazy things like define an object that doesn’t exist.
      </Text>
      <CodePane language="javascript">{`
        someObject.whatever();
      `}</CodePane>
      <Notes></Notes>
    </Slide>

    <Slide
      backgroundImage={`url(${jsErrorImage})`}
      backgroundSize="cover"
    >
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${tsErrorImage})`}
      backgroundSize="cover"
    >
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>THE BENEFITS OF TYPESCRIPT</Heading>
      <UnorderedList>
        <ListItem>Static Type-checking</ListItem>
        <ListItem>ES6 Feature Support</ListItem>
        <ListItem>Enhanced IDE Experience</ListItem>
        <ListItem>Early spotted bugs</ListItem>
        <ListItem>Cross-platform and cross-browser compatibility</ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>STORYBOOK.JS</Heading>
      <Text>
        Storybook is an open source tool for building UI components and pages in
        isolation.
      </Text>
      <CodePane language="jsx">{`
       // Button.stories.js
        import React from 'react';
        import { Button } from './Button';

        export default {
          title: 'Button',
          component: Button,
        };

        export const Primary = () => <Button primary>Button</Button>;
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHAT’S A STORY?</Heading>
      <Text>
        A story captures the rendered state of a UI component. Developers write
        multiple stories per component that describe all the “interesting”
        states a component can support.
      </Text>
      <Text>
        Each component has a set of stories that show the states it
        supports. You can browse the stories in the UI and see the code behind
        them in files that end with <CodeSpan>.stories.js</CodeSpan> or{" "}
        <CodeSpan>.stories.ts</CodeSpan>.
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide backgroundImage={`url(${storybook})`} backgroundSize="60%">
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>BENEFITS OF USING STORYBOOK</Heading>
      <Text>
        Storybook provides a sandbox to build UIs in isolation so you can
        develop hard-to-reach states and edge cases.
      </Text>
      <UnorderedList>
        <ListItem>
          Save use cases as stories in plain JavaScript to revisit during
          development, testing, and QA.
        </ListItem>
        <ListItem>
          Use addons to customize your workflow, automate testing, and integrate
          with your favorite tools.
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide
      backgroundImage={`url(${bgTheEnd})`}
      backgroundSize="cover"
      backgroundColor="white"
    >
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>REFERENCES</Heading>
      <UnorderedList>
        <ListItem>
          Getting Started guides for:{" "}
          <Link
            href="//webpack.js.org/guides/getting-started"
            target="_blank"
            rel="external"
          >
            Webpack
          </Link>
          ,{" "}
          <Link
            href="//reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="external"
          >
            React.js
          </Link>{" "}
          and{" "}
          <Link
            href="//nextjs.org/docs/getting-started"
            target="_blank"
            rel="external"
          >
            Next.js
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            target="_blank"
            rel="external"
          >
            Typescript for Javascript programmers
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//storybook.js.org/docs/react/get-started/install"
            target="_blank"
            rel="external"
          >
            Install Storybook
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//vercel.com/guides/deploying-nextjs-with-vercel"
            target="_blank"
            rel="external"
          >
            Getting Started with Next.js and Vercel
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://frontendmasters.com/"
            target="_blank"
            rel="external"
          >
            Frontend Masters — Learn JavaScript, React, Vue & Angular...
          </Link>
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>LINKS & RESOURCES</Heading>
      <UnorderedList>
        <ListItem>
          <Link
            href="https://rauchg.com/2014/7-principles-of-rich-web-applications"
            target="_blank"
            rel="external"
          >
            7 Principles of Rich Web Applications
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://rauchg.com/2015/pure-ui"
            target="_blank"
            rel="external"
          >
            Pure UI
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=Sklc_fQBmcs"
            target="_blank"
            rel="external"
          >
            Next.js in 100 Seconds // Plus Full Beginner's Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=Tn6-PIqc4UM"
            target="_blank"
            rel="external"
          >
            React in 100 Seconds
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=zQnBQ4tB3ZA"
            target="_blank"
            rel="external"
          >
            TypeScript in 100 Second
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=5IG4UmULyoA"
            target="_blank"
            rel="external"
          >
            Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack
          </Link>
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${bgAmorelie})`}
      backgroundSize="cover"
      backgroundOpacity={0.4}
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>
          QUESTIONS? 🙋🏻‍♀️
        </Heading>
      </FlexBox>
      <Notes></Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading>💖 THANK YOU FOR LISTENING...</Heading>
        <Text>
          Slides: <Link href="/">frontend-at-amorelie.vercel.app</Link>
          <br />
          Source code:{" "}
          <Link
            href="//github.com/spacecowb0y/frontend-at-amorelie"
            target="_blank"
            rel="external"
          >
            github.com/spacecowb0y/frontend-at-amorelie
          </Link>
        </Text>
      </FlexBox>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${bgBath})`}
      backgroundSize="cover"
      backgroundOpacity={0.4}
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>
          ...AND HAPPY CODING!
        </Heading>
      </FlexBox>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <SlideFragments />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
