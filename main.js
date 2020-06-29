let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 30;
let sco = 0;
let flag = true;
let time = setInterval(() => {
    if (cnt > 0) {
        cnt--;
        res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
    } else {
        res.style.color = "red";
        res.textContent = "スコア : " + " | 終了";
        que.textContent = "時間切れ!";
        flag = false;
        clearInterval(time);
    }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = ["ルフィの左頬の傷は昔、山賊につけられたものである", "ゾロの誕生日は11月11日である", "ナミは子供の頃「盗み」が苦手だった", "ウソップの父親は黒ひげ海賊団に所属している", "原作でサンジはどのコマでも必ず片目が隠れている", "チョッパーの帽子はウソップが作ったもの", "ロビンの嫌いな食べ物はガム", "フランキーの本名は「カティ・フラム」", "ブルックはバンルー海賊団に所属していた", "ジンベエの身長は４ｍ以上である"];
let seikai = new Array(max);
seikai = ["×", "〇", "〇", "×", "〇", "×", "〇", "〇", "×", "×"];
maru.addEventListener("click", () => {
    answer("〇");
});
batsu.addEventListener("click", () => {
    answer("×");
});
let answer = (str) => {
    if (flag) {
        if (seikai[num] == str) {
            que.textContent = "問題" + (num + 1) + " 正解";
            sco++;
            res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
        } else {
            que.textContent = "問題" + (num + 1) + " 不正解";
        }
        num++;
        if (num < max) {
            setTimeout(() => {
                que.textContent = "問題" + (num + 1) + " " + name[num];
                logo.src = "logo" + num + ".png";
            }, 500);
        } else {
            que.textContent = "問題の解答終了!";
            clearInterval(time);
            if (sco == max) {
                que.textContent = "全問正解！　おめでとう！";
                logo.src = "clear.png";
            }
        }
    }
};