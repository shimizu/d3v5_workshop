import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
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
            <ListItem>SVGを使って図形を描画する</ListItem>
            <ListItem>D3を使ってSVG要素を操作する</ListItem>
            <ListItem>データを読み込む</ListItem>
            <ListItem>次は？</ListItem>
          </List>
        </Slide>
        

        <Slide transition={['spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            SVGを使って図形を描画する
          </Heading>
        </Slide>
        
        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>要素と属性</Text>
          </Typeface>
          <Text>　</Text>
          <Code
          >&lt;要素 属性=&quot;値&quot; 属性=&quot;値&quot; 属性=&quot;値&quot; /&gt;</Code>
          <Text>　</Text>
          <Text>図形の種類を要素で指定し、属性値でサイズや色などの詳細設定を行う</Text>
          <Text>指定できる属性は要素によって変わるので注意が必要</Text>
        </Slide>    
        
        
        <Slide >
          <Heading size={1} fit caps lineHeight={1}>
            直接SVGタグを記述して図形を描いてみる
          </Heading>
        </Slide>

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>サンプルコード</Text>
          </Typeface>
          <CodePane textSize={"0.7em"} height="600"
            lang="html"
            source={require('raw-loader!../assets/code/svg/example.html')}
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
          <Heading size={1} fit caps lineHeight={1}  textColor="black">
            SVG基本図形
          </Heading>
        </Slide>
        
        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>長方形</Text>
          </Typeface>
          <CodePane textSize={"1.4em"} height="600"
            lang="html"
            source={require('raw-loader!../assets/code/svg/rect.html')}
            margin="20px auto"
            overflow="hidden"
          />
        </Slide>        


        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>円</Text>
          </Typeface>
          <CodePane textSize={"1.4em"} height="600"
            lang="html"
            source={require('raw-loader!../assets/code/svg/circle.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>        

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>線</Text>
          </Typeface>
          <CodePane textSize={"1.4em"} height="600"
            lang="html"
            source={require('raw-loader!../assets/code/svg/line.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        
        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>テキスト</Text>
          </Typeface>
          <CodePane textSize={"1.4em"} height="600"
            lang="html"
            source={require('raw-loader!../assets/code/svg/text.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>    


        <Slide transition={['spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            D3を使ってSVG要素を操作する
          </Heading>
        </Slide>
        
        
        <Slide >
          <Heading size={1} fit caps lineHeight={1}>
            セレクション(選択)
          </Heading>
        </Slide>        

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>CSSセレクタ</Text>
          </Typeface>
          <CodePane textSize={"0.8em"}
            lang="html"
            source={require('raw-loader!../assets/code/selection/css.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>    

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>D3 セレクション</Text>
          </Typeface>
          <CodePane textSize={"0.8em"}
            lang="html"
            source={require('raw-loader!../assets/code/selection/d3.selection.html')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>    


        
        <Slide transition={['spin']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="revers">
            データを読み込む
          </Heading>
        </Slide>        
        
        
        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>CSV</Text>
          </Typeface>
          <CodePane textSize={"0.8em"}
            lang="html"
            source={require('raw-loader!../assets/code/data/example.csv')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>            

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>TSV</Text>
          </Typeface>
          <CodePane textSize={"0.8em"}
            lang="html"
            source={require('raw-loader!../assets/code/data/example.tsv')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>JSON</Text>
          </Typeface>
          <CodePane textSize={"0.7em"}
            lang="javascript"
            source={require('raw-loader!../assets/code/data/example.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>            
        

        <Slide  bgColor="primary">
          <Typeface weight={600}>
            <Text textSize={"1.5em"}>D3を使ってデータを読み込む</Text>
          </Typeface>
          <CodePane textSize={"0.7em"}
            lang="javascript"
            source={require('raw-loader!../assets/code/data/d3.load.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>            
        
        
      </Deck>
    );
  }
}
