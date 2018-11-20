import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Typeface,
  Text,
  GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';


require('normalize.css');

/*
const images = {
};

preloader(images);
*/

const theme = createTheme({
  tertiary: '#000',
  revers:"#f9c300",
  link: "darkblue"
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide  bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            D3 Workshop
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="revers">
            by Masayuki Shimizu
          </Text>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="link">
              View on Github
            </Text>
          </Link>
        </Slide>


        <Slide bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"2.5em"}>目次</Text>
          </Typeface>
          <List>
            <ListItem>HTML, CSS,  SVGを使って図を描く</ListItem>
            <ListItem>データを読み込む</ListItem>
            <ListItem>D3を使って要素を操作する</ListItem>
            <ListItem>次は？</ListItem>
          </List>
        </Slide>
        

        <Slide transition={['spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            HTML, CSSを使って図形を描いてみる
          </Heading>
        </Slide>
        
        
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            HTML, CSSを使って図形を描いてみる
          </Heading>
        </Slide>

        
        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>サンプルコード</Text>
          </Typeface>
          <CodePane textSize={"0.7em"}
            lang="html"
            source={require('raw-loader!../assets/code/html.html')}
            margin="20px auto"
            overflow="hidden"
          />
        </Slide>

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>実行結果</Text>
          </Typeface>
        <iframe src="dist/code/html.html"></iframe>
        </Slide>


        <Slide >
          <Heading size={1} fit caps lineHeight={1}>
            SVGを使って図形を描いてみる
          </Heading>
        </Slide>

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>サンプルコード</Text>
          </Typeface>
          <CodePane textSize={"0.7em"}
            lang="html"
            source={require('raw-loader!../assets/code/svg.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>実行結果</Text>
          </Typeface>
        <iframe src="dist/code/svg.html"></iframe>
        </Slide>

        
        <Slide  bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            D3では主にSVGを使って図形を描画します。
          </Heading>
        </Slide>
        
        
        
        <Slide transition={['spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            データを読み込む
          </Heading>
        </Slide>        
        
        
        
      </Deck>
    );
  }
}
