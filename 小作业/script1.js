function popupImg() {
  // 创建一个新的图片元素
  var img = document.createElement("img");
  // 设置图片类名，用于样式控制
  img.classList.add("popup-img");
  // 设置图片源
  img.src = "结算画面.png";
  // 将图片添加到body中
  document.body.appendChild(img);
}
document.getElementById('playButton').addEventListener('click', function() {
            document.getElementById('myAudio').play();
        });
// 获取所有需要的元素
var button1 = document.getElementById('button1');
var demo1 = document.getElementById('demo1');
var demo = document.getElementById('demo');
var demo2 = document.getElementById('demo2');
var newButtonsContainer = document.getElementById('newButtonsContainer');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');
var button10 = document.getElementById('button10');
var button11 = document.getElementById('button11');
var button12 = document.getElementById('button12');
var button13 = document.getElementById('button13');
var button14 = document.getElementById('button14');
var button15 = document.getElementById('button15');
var button16 = document.getElementById('button16');
var button17 = document.getElementById('button17');
var button18 = document.getElementById('button18');
var button19 = document.getElementById('button19');
var button20 = document.getElementById('button20');
var button21 = document.getElementById('button21');
var playButton = document.getElementById('playButton');
var button22 = document.getElementById('button22');






// 初始隐藏button4和button5
button4.classList.add('hidden');
button5.classList.add('hidden');
button6.classList.add('hidden');
button7.classList.add('hidden');
button8.classList.add('hidden');
button9.classList.add('hidden');
button10.classList.add('hidden');
button11.classList.add('hidden');
button12.classList.add('hidden');
button13.classList.add('hidden');
button14.classList.add('hidden');
button15.classList.add('hidden');
button16.classList.add('hidden');
button17.classList.add('hidden');
button18.classList.add('hidden');
button19.classList.add('hidden');
button20.classList.add('hidden');
button21.classList.add('hidden');
button22.classList.add('hidden');



// 为button1添加点击事件监听器
button1.addEventListener('click', function() {
  // 更改demo1和demo的文本
  demo1.innerHTML = '距离上一次跟主脑的大战已经过去了两个多月，你已经很久很久没有感受到如此的平静了，在大战之后，你为了和你的吸血鬼爱人阿斯代伦一起生活，便和他一起搬到了没有阳光的幽暗地域住下，过着无所事事博德之门大英雄的日子。有一天，你躺在床上，不禁回想起自己那些可爱的队友们，威尔和卡拉克虽然去了地狱，但他们没有堕落，现在地狱有了一支半永久恶魔狩猎小队；莱尔泽尔也不再是那个刚刚成年的女孩，她现在是泽洋斯基人的领袖，她会带领她们在星界建立一个更稳定、强大的帝国；盖尔在放弃王冠之后回到了深水城，真好奇他在未来会不会成为像伊尔明斯特那样伟大的法师；想着想着你突然想到你的爱人————阿斯代伦，他一般起床很早，毕竟精灵一天只需要冥想四个小时就已经足够了，可是平常即使他醒了，也会趴在你身边呆呆地望着你，今天他人呢？';
  demo.innerHTML = '幽暗地域的家中';

  // 移除demo2元素
  demo2.remove();
  playButton.remove();

  // 显示新按钮容器并移除button1
  newButtonsContainer.classList.remove('hidden');
  this.remove();

  // 为新按钮添加点击事件监听器
  button2.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域家中';
    demo1.innerHTML = '你穿好衣服，走出卧室，你想找到阿斯代伦，但是这里并没有他的气息，你搜查了每一个房间，确实连阿斯代伦的影子都没有。';

    // 移除button2和button3
    button2.remove();
    button3.remove();

    // 显示button4和button5
    button4.classList.remove('hidden');
    button5.classList.remove('hidden');
  });

  button3.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你睡着了，第二天醒来阿斯代伦也没有出现，你再也找不到他了。';

    // 移除button2和button3
    button2.remove();
    button3.remove();
  });

  button4.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域———东部';
    demo1.innerHTML = '你出了门，幽暗地域可不是一个人人都友善的地方，这里有可怕的牛头人，还有各种各样的神殿藏着致命的机关......你到底要去哪里才能找到阿斯代伦呢？南边牛头人占领的那片区域你和阿斯代伦即使在一起也很少去，仅仅是两个人的战力是远远不足够的，可是穿过那片区域，就可以到达古老遗迹奥法高塔，阿斯代伦也许会在那里;西边是灰矮人的聚集地，他们爱好烧杀抢掠，不过因为你和阿斯代伦生活的一直非常低调，就凭你们俩应该还惹不到那群人；北边是蕈人村，蕈人是非常友好的种族，长成一副可爱的蘑菇样子，你和阿斯代伦经常会去那里的炼金商人处买炼金的药品，不过要是阿斯代伦一个人去那里买药应该很快就回来了吧，要不要再等一下呢？';

    // 移除button2和button3
    button4.remove();
    button5.remove();
    button6.classList.remove('hidden');
    button7.classList.remove('hidden');
    button8.classList.remove('hidden');
    button9.classList.remove('hidden');
  });

  button5.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你想在家里边等一等，也许阿斯代伦不久之后就会回来，可是到了晚上，阿斯代伦也没有返回，你再也见不到他了。';

    // 移除button2和button3
    button4.remove();
    button5.remove();
  });

  button6.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域———西部';
    demo1.innerHTML = '你害怕黑矮人们抢走了阿斯代伦，你前往灰矮人的地盘，到了之后你悄悄咪咪潜行到灰矮人们的帐篷之中“坏了！怎么有人十点就吃午饭”，你看着一个胖子灰矮人走到你藏身的冰柜这里，“你想干什么？老大，这里有个人鬼鬼祟祟的。”灰矮人们不过五秒就把你团团围住。';

    // 移除button2和button3
    button6.remove();
    button7.remove();
    button8.remove();
    button9.remove();
    button10.classList.remove('hidden');
    button11.classList.remove('hidden');
  });

  button7.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域———西部';
    demo1.innerHTML = '你前往了北边的蕈人村，也许能在那里找到正在休息的阿斯代伦，毕竟友善的蕈人们也不可能伤到阿斯代伦，炼金商人也就只是商人而已，他们不可能抓走阿斯代伦。可是当你到达之后你发现事实比你想象的要复杂，曾经你们帮助过的蕈人的首领蕈人王斯伯王座的旁边绑着一个人，那正是阿斯代伦!"愣着干嘛！快把我救下来！"你完全不知道发生了什么！';

    // 移除button2和button3
    button6.remove();
    button7.remove();
    button8.remove();
    button9.remove();
    button18.classList.remove('hidden');
    button19.classList.remove('hidden');
  });

  button8.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你不顾危险，想去牛头人的地盘查看阿斯代伦是否在那里，你忘了自己只有一个人，根本不是牛头人们的对手，你刚到他们地盘的边缘，就被牛头人发现，一只体型硕大的牛头人直接冲向你，你的死相很惨。';

    // 移除button2和button3
    button6.remove();
    button7.remove();
    button8.remove();
    button9.remove();
  });

  button18.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你不顾三七二十一，特别着急只想着救阿斯代伦，你打开神圣武器，一个至圣斩劈到了蕈人王斯伯的头上，激怒了他们所有人，就这样你和阿斯代伦都被蕈人的孢子寄生了，你们成为了蕈人的蘑菇傀儡。';

    // 移除button2和button3
    button18.remove();
    button19.remove();
  });

  button19.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域——蕈人村';
    demo1.innerHTML = '“斯伯！怎么回事！你绑架阿斯代伦干什么”“净化、牺牲、净化、牺牲......”你察觉到蕈人王斯伯有点奇怪，嘴里嘟哝着什么进化牺牲的，你感觉它不是很对。';

    // 移除button2和button3
    button18.remove();
    button19.remove();
    button20.classList.remove('hidden');
    button21.classList.remove('hidden');
  });

  button20.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你看蕈人王斯伯那副发疯的样子，忍不住释放了个火球术，可是火球术这种大型AOE法术实在是太容易伤到友军了，当你反映过来时，蕈人村的很多蕈人和蘑菇树都烧起来了，阿斯代伦虽然得救，但是受了重伤。';

    // 移除button2和button3
    button20.remove();
    button21.remove();
  });

  button21.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '你解救了阿斯代伦！';
    demo1.innerHTML = '蕈人王这么不对劲，是中毒了吧，其他的蕈人好像是被蕈人王发出的孢子影响了，他们根本没有发现蕈人王的异样，你跟阿斯代伦在家里炼的解毒剂终于能够派上用场了！，你潜行到蕈人王身后，把他猛地扑到并给它喂了一大口解毒剂，“我，我...发生什么事了”蕈人王说，“快把阿斯代伦放下来啊斯伯！”你解救了阿斯代伦，也又一次解救了蕈人村！';

    // 移除button2和button3
    button20.remove();
    button21.remove();
    button22.classList.remove('hidden');
  });

  button10.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域———西部';
    demo1.innerHTML = '你的18点魅力在平常在阿斯代伦面前并没有什么意义，但在这里终于有用了“嘿！我没有任何要偷袭的意思，我是准备给首领大人取鞋子呢，我这不是害怕‘加速战靴’掉到角落里了吗”灰矮人首领点了点头说：“好，给我继续找！”你趁着“找鞋子”的时候翻遍了整个灰矮人的地盘，也没有看见阿斯代伦的影子，要是阿斯代伦来了，估计早都被抓进监狱了吧，现在你要去北边的蕈人村，还是去南边呢？';

    // 移除button2和button3
    button10.remove();
    button11.remove();
    button12.classList.remove('hidden');
    button13.classList.remove('hidden');
  });

  button11.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '就凭你力量8的小身板，这群又矮又壮的灰矮人你是推不动的，他们看你想反抗的样子，立马把你捆了起来，过不了几天，他们发现从你这里得不到任何东西，他们把你杀了。';

    // 移除button2和button3
    button10.remove();
    button11.remove();
  });

  button12.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域———蕈人村';
    demo1.innerHTML = '从灰矮人的地盘脱身之后，你前往了北边的蕈人村，也许能在那里找到正在休息的阿斯代伦，毕竟友善的蕈人们也不可能伤到阿斯代伦，炼金商人也就只是商人而已，他们不可能抓走阿斯代伦。可是当你到达之后你发现事实比你想象的要复杂，曾经你们帮助过的蕈人的首领蕈人王斯伯王座的旁边绑着一个人，那正是阿斯代伦!"愣着干嘛！快把我救下来！"你完全不知道发生了什么！';

    // 移除button2和button3
    button12.remove();
    button13.remove();
    button14.classList.remove('hidden');
    button15.classList.remove('hidden');
  });

  button13.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '从灰矮人的地盘脱身之后，你不顾危险，想去牛头人的地盘查看阿斯代伦是否在那里，你忘了自己只有一个人，根本不是牛头人们的对手，你刚到他们地盘的边缘，就被牛头人发现，一只体型硕大的牛头人直接冲向你，你的死相很惨。';

    // 移除button2和button3
    button12.remove();
    button13.remove();
  });

  button14.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你不顾三七二十一，特别着急只想着救阿斯代伦，你打开神圣武器，一个至圣斩劈到了蕈人王斯伯的头上，激怒了他们所有人，就这样你和阿斯代伦都被蕈人的孢子寄生了，你们成为了蕈人的蘑菇傀儡。';

    // 移除button2和button3
    button14.remove();
    button15.remove();
  });

  button15.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '幽暗地域——蕈人村';
    demo1.innerHTML = '“斯伯！怎么回事！你绑架阿斯代伦干什么”“净化、牺牲、净化、牺牲......”你察觉到蕈人王斯伯有点奇怪，嘴里嘟哝着什么进化牺牲的，你感觉它不是很对。';

    // 移除button2和button3
    button14.remove();
    button15.remove();
    button16.classList.remove('hidden');
    button17.classList.remove('hidden');
  });

  button16.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '你看蕈人王斯伯那副发疯的样子，忍不住释放了个火球术，可是火球术这种大型AOE法术实在是太容易伤到友军了，当你反映过来时，蕈人村的很多蕈人和蘑菇树都烧起来了，阿斯代伦虽然得救，但是受了重伤。';

    // 移除button2和button3
    button16.remove();
    button17.remove();
  });

  button17.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '你解救了阿斯代伦！';
    demo1.innerHTML = '蕈人王这么不对劲，是中毒了吧，其他的蕈人好像是被蕈人王发出的孢子影响了，他们根本没有发现蕈人王的异样，你跟阿斯代伦在家里炼的解毒剂终于能够派上用场了！，你潜行到蕈人王身后，把他猛地扑到并给它喂了一大口解毒剂，“我，我...发生什么事了”蕈人王说，“快把阿斯代伦放下来啊斯伯！”你解救了阿斯代伦，也又一次解救了蕈人村。';

    // 移除button2和button3
    button16.remove();
    button17.remove();
    button22.classList.remove('hidden');
  });

  button9.addEventListener('click', function() {
    // 更改demo和demo1的文本
    demo.innerHTML = '游戏结束';
    demo1.innerHTML = '阿斯代伦应该是没有去买药，你再也见不到他了（别在家待着了赶紧出去找他！）';

    // 移除button2和button3
    button6.remove();
    button7.remove();
    button8.remove();
    button9.remove();
  });

});
