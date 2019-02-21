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
	revers: '#f9c300',
	link: 'darkblue'
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
			<Deck transition={[ 'slide' ]} theme={theme} transitionDuration={500}>
				<Slide bgColor="black">
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
						<Text textSize={'2.5em'}>目次</Text>
					</Typeface>
					<List>
						<ListItem>SVGを使って図形を描画する</ListItem>
						<ListItem>D3を使ってSVG要素を操作する</ListItem>
						<ListItem>データを読み込む</ListItem>
						<ListItem>データを元に要素を生成する</ListItem>
						<ListItem>値を正規化する</ListItem>
						<ListItem>データドリブンドキュメント</ListItem>
					</List>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						SVGを使って図形を描画する
					</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>要素と属性</Text>
					</Typeface>
					<Text>　</Text>
					<Code>&lt;要素 属性=&quot;値&quot; 属性=&quot;値&quot; 属性=&quot;値&quot; /&gt;</Code>
					<Text>　</Text>
					<Text textAlign="left">図形の種類を要素で指定し、属性値でサイズや色などの詳細設定を行う。</Text>
					<Text textAlign="left">指定できる属性は要素によって変わるので注意が必要。</Text>
				</Slide>

				<Slide>
					<Heading size={1} fit caps lineHeight={1}>
						直接SVGタグを記述して図形を描いてみる
					</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>サンプルコード</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						height="600"
						lang="html"
						source={require('raw-loader!../assets/code/svg/example.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>実行結果</Text>
					</Typeface>
					<iframe src="dist/code/svg.html" />
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>SVG基本図形</Text>
						<hr />
						<Text textSize={'2em'}>rect, circle, line, text</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>長方形</Text>
					</Typeface>
					<CodePane
						textSize={'1.4em'}
						height="600"
						lang="html"
						source={require('raw-loader!../assets/code/svg/rect.html')}
						margin="20px auto"
						overflow="hidden"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>円</Text>
					</Typeface>
					<CodePane
						textSize={'1.4em'}
						height="600"
						lang="html"
						source={require('raw-loader!../assets/code/svg/circle.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>線</Text>
					</Typeface>
					<CodePane
						textSize={'1.4em'}
						height="600"
						lang="html"
						source={require('raw-loader!../assets/code/svg/line.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>テキスト</Text>
					</Typeface>
					<CodePane
						textSize={'1.4em'}
						height="600"
						lang="html"
						source={require('raw-loader!../assets/code/svg/text.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						D3を使ってSVG要素を操作する
					</Heading>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>セレクション(選択)</Text>
						<hr />
						<Text textSize={'2em'}>select(), selectAll()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>CSSセレクタ</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/selection/css.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>D3 セレクション</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/selection/d3.selection.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>アップデート(更新)</Text>
						<hr />
						<Text textSize={'2em'}>attr(), style()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>select -> update</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/before.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/updata.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/after.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>トランジション(遷移)</Text>
						<hr />
						<Text textSize={'2em'}>transition()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>select -(transition)-> update</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/before.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/transition.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/update/after.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>アペンド(追加)</Text>
						<hr />
						<Text textSize={'2em'}>append()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>select -> append</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/append/select-before.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/append/select.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/append/select-reslut.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>selectAll -> append</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/append/selectAll-before.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/append/selectAll.html')}
						margin="20px auto"
						overflow="overflow"
					/>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/append/selectAll-reslut.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						データを読み込む
					</Heading>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>データ形式</Text>
						<hr />
						<Text textSize={'2em'}>csv, tsv, json</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>CSV</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/data/example.csv')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textAlign="left">カンマ(,)で区切られたデータ形式。一行目が項目名になる。</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>TSV</Text>
					</Typeface>
					<CodePane
						textSize={'0.8em'}
						lang="html"
						source={require('raw-loader!../assets/code/data/example.tsv')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textAlign="left">タブ(,)で区切られたデータ形式。一行目が項目名になる。</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>JSON</Text>
					</Typeface>
					<div className="overflow-Codepane">
						<CodePane
							textSize={'0.6em'}
							width="400"
							lang="javascript"
							source={require('raw-loader!../assets/code/data/example.txt')}
							margin="20px auto"
						/>
					</div>
					<Text textAlign="left">JavaScriptのObjectを外部ファイルとして保存するデータ形式</Text>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>データロード</Text>
						<hr />
						<Text textSize={'2em'}>csv(), tsv(), json()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>D3を使ってデータを読み込む</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/data/d3.load.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>DataSet</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/data/object.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textAlign="left">読み込んだデータは連想配列に変換され添え字を使ってアクセスできる</Text>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						データを元に要素を生成する
					</Heading>
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>アペンド(追加)</Text>
						<hr />
						<Text textSize={'2em'}>data() -> append()</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>Data -> append</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/databinding/append.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textAlign="left">データを元にbody要素配下にp要素を追加する</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>result</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="html"
						source={require('raw-loader!../assets/code/databinding/result.html')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>データ束縛と関数</Text>
					</Typeface>
					<Text textAlign="left">dataメソッドを使うことで要素にデータを束縛できる。</Text>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/databinding/binding.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textAlign="left">束縛したデータはアップデートメソッドに関数を渡すことで取得できる</Text>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/databinding/callback.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						値を正規化する
					</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>Data -> Document</Text>
					</Typeface>
					<Image className="border" src={'dist/image/scale/scale1.png'} />
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>Data -> px</Text>
					</Typeface>
					<Image className="border" src={'dist/image/scale/scale2.png'} />
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>Data -> px</Text>
					</Typeface>
					<Image className="border" src={'dist/image/scale/scale3.png'} />
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>Data -> px?</Text>
					</Typeface>
					<Image className="border" src={'dist/image/scale/scale4.png'} />
				</Slide>

				<Slide>
					<Typeface weight={600}>
						<Text textSize={'2em'}>スケール(正規化)</Text>
						<hr />
						<Text textSize={'2em'}>
							scaleLinear()<br />scaleBand()<br />scaleTime()
						</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>d3.scaleLinear</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/scale/scaleLinear.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textSize={'1em'}>続値データを、指定された範囲に正規化する</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>d3.scaleLinear (color)</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/scale/scaleLinear_color.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textSize={'1em'}>rangeには、数値だけでなく色範囲も指定できます</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>d3.scaleBand</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/scale/scaleBand.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textSize={'1em'}>カテゴリデータを、指定された範囲に正規化する</Text>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1.5em'}>d3.scaleTime</Text>
					</Typeface>
					<CodePane
						textSize={'0.7em'}
						lang="javascript"
						source={require('raw-loader!../assets/code/scale/scaleTime.txt')}
						margin="20px auto"
						overflow="overflow"
					/>
					<Text textSize={'1em'}>日時(Date Object)を指定された範囲に正規化する</Text>
				</Slide>

				<Slide transition={[ 'spin' ]} bgColor="black">
					<Heading size={1} fit caps lineHeight={1} textColor="revers">
						データドリブンドキュメント
					</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'2.5em'}>課題</Text>
					</Typeface>
					<List>
						<ListItem>データが頻繁に変化する場合、要素とデータの同期を管理するのが困難</ListItem>
						<ListItem>データの数が要素より多い場合、どうやって削除すべき要素を判別するか</ListItem>
						<ListItem>データの数が要素より少ない場合、どうやって追加すべき要素を判別するか</ListItem>
						<ListItem>残すべき要素をどうやって判別するか</ListItem>
					</List>
				</Slide>

				<Slide bgColor="primary">
					<div className="d3string">
						<span>D</span>ata-<span>D</span>riven <span>D</span>ocuments
					</div>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textAlign="left" textSize={'2em'}>
							データと要素の差分を判別するためのセレクターを提供するD3のコア機能
						</Text>
					</Typeface>
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1em'}>残すべき要素を選択</Text>
					</Typeface>
					<Image className="border" src={'dist/image/enterExitUpdate/selected.png'} />
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1em'}>新たに追加すべき要素を選択</Text>
					</Typeface>
					<Image className="border" src={'dist/image/enterExitUpdate/enter.png'} />
				</Slide>

				<Slide bgColor="primary">
					<Typeface weight={600}>
						<Text textSize={'1em'}>削除すべき要素を選択</Text>
					</Typeface>
					<Image className="border" src={'dist/image/enterExitUpdate/exit.png'} />
				</Slide>
			</Deck>
		);
	}
}
