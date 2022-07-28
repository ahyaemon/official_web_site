import {Component} from "solid-js";
import {MenuItem} from "../../types/MenuItem";
import {MenuList} from "../../components/MenuList";
import img1 from "../../assets/img/super-libre/super-libre.png"

export const gameMenuItems: MenuItem[] = [
    { title: "SUPER LIBRE", link: "/game/super-libre" },
]

export const SuperLibrePage: Component = () => (
    <div>
        <h2>ゲーム</h2>
        <MenuList menuItems={gameMenuItems}/>

        <hr/>

        <h3>SUPER LIBRE</h3>
        <p>全く新しい2Dアクションが完成しました。</p>
        <img src={img1} alt="screen shot"/>
        <p>windows7, 8, vista, 10あたりまで動作確認してます。</p>

        <p><a href="https://www.freem.ne.jp/win/game/16042" target="_blank">ダウンロードサイトへ</a></p>

        <p>
            クリアすると豪華な特典があるので、是非やってみてください。<br/>
            頑張れば2分ちょっとで全クリできます。(全6面)<br/>
            <small>HOW画面から7面に行けます（隠し）</small>
        </p>
        <p>
            プレイ方法は、同梱してある説明書に書いてあります。
        </p>
        <p>
            ・開発環境的な話<br/>
            DXライブラリとc++で作りました。
        </p>
        <p>
            ※ ノートン先生がPCにインストールされていると、ウィルスだと判断されるみたいですが、ウィルスではありません。。<br/>
            (ダウンロード数が少ないうちはそうなるみたいです)
        </p>
        <p>
            2017/12/2 ver1.01<br/>
            2017/10/23 ver1.00
        </p>
    </div>
)
