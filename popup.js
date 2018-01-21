function walk(node) {
  var child;
  var next;
  switch ( node.nodeType ) {
    case 1:
    case 9:
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3:
      emojify(node);
      break;
  }
}

function emojify(textNode) {
  var v = textNode.nodeValue.toLowerCase();

  v = v.replace(/coffee/g, "☕");
  v = v.replace(/java/g, "☕");
  v = v.replace(/snapchat/g, "👻");
  v = v.replace(/execution/g, "💀ion");
  v = v.replace(/execute/g, "💀");

  v = v.replace(/wrap/g, "🎁");
  v = v.replace(/definition/g, "📖");
  v = v.replace(/senior/g, "👴");
  v = v.replace(/cart/g, "🛒");
  v = v.replace(/shop/g, "🛒");
  v = v.replace(/mouse/g, "🐁");
  v = v.replace(/rocket/g, "🚀");
  v = v.replace(/space/g, "🌌");
  v = v.replace(/point/g, "👉");
  v = v.replace(/good/g, "👌");
  v = v.replace(/dank/g, "👌");
  v = v.replace(/ ok /g, "👌");
  v = v.replace(/ okay /g, "👌");

  v = v.replace(/light bulb/g, "💡");
  v = v.replace(/lightbulb/g, "💡");
  v = v.replace(/light/g, "💡");
  v = v.replace(/bulb/g, "💡");
  v = v.replace(/ okay /g, "👌");

  v = v.replace(/sister/g, "👧");
  v = v.replace(/girl/g, "👧");
  v = v.replace(/white/g, "⚪");
  v = v.replace(/black/g, "⚫");

  v = v.replace(/scout/g, "⚜️");
  v = v.replace(/anger/g, "😡");
  v = v.replace(/moscow/g, "🇷🇺");
  v = v.replace(/dolphin/g, "🐬");
  v = v.replace(/nose/g, "👃");
  v = v.replace(/mouth/g, "👄");
  v = v.replace(/eye/g, "👁️");
  v = v.replace(/ hat /g, "🎩");
  v = v.replace(/thank/g, "🙏");
  v = v.replace(/pray/g, "🙏");
  v = v.replace(/eye/g, "👁️");



  v = v.replace(/sad/g, "😢");
  v = v.replace(/angry/g, "😡");
  v = v.replace(/crying/g, "😭");
  v = v.replace(/depressed/g, "😔");
  v = v.replace(/beethoven/g, "🎼");
  v = v.replace(/youTube/g, "📺");
  v = v.replace(/instagram/g, "📷");
  v = v.replace(/home/g, "🏠");
  v = v.replace(/jobs/g, "👔");
  v = v.replace(/faq/g, "⁉️");
  v = v.replace(/smith/g, "🔨");
  v = v.replace(/leader/g, "👑");
  v = v.replace(/tools/g, "🛠️");
  v = v.replace(/world/g, "🌎");
  v = v.replace(/earth/g, "🌎");
  v = v.replace(/face/g, "🤓");
  v = v.replace(/book/g, "📚");
  v = v.replace(/twitter/g, "🐦");
  v = v.replace(/social/g, "🍻");
  v = v.replace(/linkedin/g, "➕");
  v = v.replace(/building/g, "🏛️");

  v = v.replace(/briefcase/g, "💼");
  v = v.replace(/case/g, "💼");


  v = v.replace(/pencil/g, "✏️");
  v = v.replace(/writing/g, "✏️");

  v = v.replace(/high/g, "🍁");
  v = v.replace(/dank/g, "🍁");

  v = v.replace(/end/g, "🏁");
  v = v.replace(/finished/g, "🏁");
  v = v.replace(/finish/g, "🏁");

  v = v.replace(/google/g, "🔎");
  v = v.replace(/search/g, "🔎");
  v = v.replace(/look/g, "🔎");
  v = v.replace(/find/g, "🔎");


  v = v.replace(/complete/g, "✅");
  v = v.replace(/done/g, "✅");
  v = v.replace(/successfull/g, "✅");
  v = v.replace(/success/g, "✅");

  v = v.replace(/middle/g, "🖕");
  v = v.replace(/welcome/g, "👋");

  v = v.replace(/argument/g, "😡");

  v = v.replace(/sun/g, "🌞");
  v = v.replace(/flower/g, "🌼");
  v = v.replace(/smiley/g, "😀");
  v = v.replace(/smile/g, "😀");
  v = v.replace(/gun/g, "🔫");
  v = v.replace(/dog/g, "🐶");
  v = v.replace(/puppy/g, "🐶");
  v = v.replace(/cat/g, "🐱");
  v = v.replace(/kitten/g, "🐱");
  v = v.replace(/gun/g, "🔫");


  v = v.replace(/video/g, "📺");
  v = v.replace(/movie/g, "📺");
  v = v.replace(/television/g, "📺");
  v = v.replace(/ tv /g, "📺");


  v = v.replace(/\$/g, "💰");
  v = v.replace(/fund/g, "💰");
  v = v.replace(/health/g, "🏥");
  v = v.replace(/school/g, "🚌");
  v = v.replace(/open/g, "🚪");
  v = v.replace(/fund/g, "💰");
  v = v.replace(/health/g, "🏥");
  v = v.replace(/school/g, "🚌");

  v = v.replace(/back/g, "🔙");
  v = v.replace(/walk/g, "🚶‍♂️");
  v = v.replace(/walking/g, "🚶‍♂️");

  v = v.replace(/student/g, "👨‍🎓");

  v = v.replace(/graduation/g, "🎓");
  v = v.replace(/graduate/g, "👨‍🎓");
  v = v.replace(/cold/g, "❄️");
  v = v.replace(/ hot /g, "🔥");
  v = v.replace(/fire/g, "🔥");
  v = v.replace(/flame/g, "🔥");

  v = v.replace(/event/g, "📅");
  v = v.replace(/events/g, "📅");

  v = v.replace(/baby/g, "👶");
  v = v.replace(/babies/g, "👶");
  v = v.replace(/jr/g, "👶");

  v = v.replace(/question/g, "❓");
  v = v.replace(/questions/g, "❓");
  v = v.replace(/\?/g, "❓");

  v = v.replace(/build/g, "🛠️");
  v = v.replace(/call/g, "📲");

  v = v.replace(/spider/g, "🕷️");
  v = v.replace(/man/g, "👨");
  v = v.replace(/man/g, "👨");
  v = v.replace(/wink/g, "😜");
  v = v.replace(/happy/g, "😀");
  v = v.replace(/dollar/g, "💵");

  v = v.replace(/step/g, "👞");
  v = v.replace(/dead/g, "☠️");
  v = v.replace(/bomb/g, "💣");
  v = v.replace(/knife/g, "🔪");
  v = v.replace(/hourglass/g, "⌛");
  v = v.replace(/balloon/g, "🎈");

  v = v.replace(/credit card/g, "💳");
  v = v.replace(/shrug/g, "🤷");
  v = v.replace(/dragon/g, "🐉");
  v = v.replace(/son/g, "👦");
  v = v.replace(/child/g, "👦");
  v = v.replace(/boy/g, "👦");

  v = v.replace(/hole/g, "🕳️");
  v = v.replace(/grapes/g, "🍇");
  v = v.replace(/melon/g, "🍈");
  v = v.replace(/watermelon/g, "🍉");
  v = v.replace(/banana/g, "🍌");
  v = v.replace(/pineapple/g, "🍍");


  v = v.replace(/kiwi/g, "🥝");

  v = v.replace(/avacado/g, "🥑");
  v = v.replace(/strawberry/g, "🍓");
  v = v.replace(/shroom/g, "🍄");
  v = v.replace(/cherries/g, "🍒");
  v = v.replace(/cherry/g, "🍒");
  v = v.replace(/bread/g, "🍞");
  v = v.replace(/butt/g, "🍑");
  v = v.replace(/peach/g, "🍑");

  v = v.replace(/candy/g, "🍫");
  v = v.replace(/chocolate/g, "🍫");

  v = v.replace(/email/g, "📧");
  v = v.replace(/chocolate/g, "🍫");
  v = v.replace(/chocolate/g, "🍫");




  v = v.replace(/add/g, "➕");
  v = v.replace(/minus/g, "➖");
  v = v.replace(/substract/g, "➖");
  v = v.replace(/plus/g, "➕");
  v = v.replace(/divide/g, "➗");
  v = v.replace(/division/g, "➗");
  v = v.replace(/photograph/g, "📷");

  v = v.replace(/code/g,"💻");
  v = v.replace(/ ny /g, "🗽");
  v = v.replace(/new york/g, "🗽");
  v = v.replace(/new york city/g, "🗽");

  v = v.replace(/nyc/g, "🗽");
  v = v.replace(/ la /g, "🌆");
  v = v.replace(/los angeles/g, "🌆");
  v = v.replace(/code/g, "⌨️");
  v = v.replace(/Code/g, "⌨️");
  v = v.replace(/computer/g, "💻");
  v = v.replace(/album/g, "🎵");
  v = v.replace(/album/g, "🎵");

  v = v.replace(/engineers/g, "👩‍💻👨‍💻");
  v = v.replace(/developer/g, "👩‍💻");
  v = v.replace(/developers/g, "👩‍💻");
  v = v.replace(/Developer/g, "👨‍💻");
  v = v.replace(/Developers/g, "👨‍💻");
  v = v.replace(/stars/g, "⭐");
  v = v.replace(/blog/g, "📝");
  v = v.replace(/first/g, "🥇");
  v = v.replace(/technology/g, "🖥️");

  v = v.replace(/picture/g, "🖼️");
  v = v.replace(/pic/g, "🖼️");

  v = v.replace(/gaming/g, "🎮");
  v = v.replace(/game/g, "🎮");

  v = v.replace(/deadline/g, "📅");
  v = v.replace(/learn/g, "🏫");

  v = v.replace(/vote/g, "🗳️");

  v = v.replace(/upvote/g, "⬆️");
  v = v.replace(/downvote/g, "⬆⬇️");

  v = v.replace(/house/g, "🏠");

  v = v.replace(/donald/g, "💩");
  v = v.replace(/trump/g, "💩");
  v = v.replace(/president/g, "💩");

  v = v.replace(/russia/g, "🇷🇺");
  v = v.replace(/ usa /g, "🇺🇸");
  v = v.replace(/united states/g, "🇺🇸");
  v = v.replace(/united states of america/g, "🇺🇸");
  v = v.replace(/ u.s.a. /g, "🇺🇸");
  v = v.replace(/mexico/g, "🇲🇽");
  v = v.replace(/mexican/g, "🇲🇽");


  v = v.replace(/fox/g, "🦊");
  v = v.replace(/phone/g, "☎️");
  v = v.replace(/telephone/g, "☎️");
  v = v.replace(/cellphone/g, "📱");
  v = v.replace(/iphone/g, "📱");

  v = v.replace(/photo/g, "📷");
  v = v.replace(/photograph/g, "📷");
  v = v.replace(/newspaper/g, "📰");
  v = v.replace(/news/g, "📰");

  v = v.replace(/first/g, "1️⃣st");
  v = v.replace(/second/g, "2️⃣nd");
  v = v.replace(/third/g, "3️⃣rd");

  v = v.replace(/1/g, "1️⃣");
  v = v.replace(/one/g, "1️⃣");
  v = v.replace(/2/g, "2️⃣");
  v = v.replace(/two/g, "2️⃣");
  v = v.replace(/three/g, "3️⃣");
  v = v.replace(/3/g, "3️⃣");
  v = v.replace(/4/g, "4️⃣");
  v = v.replace(/four/g, "4️⃣");
  v = v.replace(/five/g, "5️⃣");
  v = v.replace(/5/g, "5️⃣");
  v = v.replace(/six/g, "6️⃣");
  v = v.replace(/6/g, "6️⃣");
  v = v.replace(/seven/g, "7️⃣");
  v = v.replace(/7/g, "7️⃣");
  v = v.replace(/eight/g, "8️⃣");
  v = v.replace(/8/g, "8️⃣");
  v = v.replace(/nine/g, "9️⃣");
  v = v.replace(/9/g, "9️⃣");
  v = v.replace(/0/g, "0️⃣");
  v = v.replace(/zero/g, "0️⃣");


  v = v.replace(/news/g, "📰");

  v = v.replace(/link/g, "🔗");
  v = v.replace(/machine/g, "⚙️");
  v = v.replace(/gear/g, "⚙️");
  v = v.replace(/wrench/g, "🔧");


  v = v.replace(/pill/g, "💊");
  v = v.replace(/drug/g, "💊");
  v = v.replace(/temperature/g, "🌡️");
  v = v.replace(/temp/g, "🌡️");
  v = v.replace(/recursion/g, "🔂");
  v = v.replace(/recurse/g, "🔂");

  v = v.replace(/repeat/g, "🔁");
  v = v.replace(/loop/g, "🔁");
  v = v.replace(/cross/g, "✝️");

  v = v.replace(/popped/g, "💥");
  v = v.replace(/pop/g, "💥");
  v = v.replace(/!/g, "❗");
  v = v.replace(/loud/g, "🔊");
  v = v.replace(/pancake/g, "🥞");
  v = v.replace(/stack/g, "🥞");
  v = v.replace(/cross/g, "✝️");
  v = v.replace(/cross/g, "✝️");

  v = v.replace(/pound/g, "#️⃣");
  v = v.replace(/hashtag/g, "#️⃣");
  v = v.replace(/hash/g, "#️⃣");
  v = v.replace(/number/g, "#️⃣");

  v = v.replace(/order/g, "👮");
  v = v.replace(/return/g, "↩️");
  v = v.replace(/turn/g, "↩️");

  v = v.replace(/time/g, "🕰️");
  v = v.replace(/clock/g, "🕰️");
  v = v.replace(/stop/g, "🛑");
  v = v.replace(/don’t/g, "🚫");
  v = v.replace(/say/g, "🗣️");

  v = v.replace(/integer/g, "🔢");
  v = v.replace(/printer/g, "🖨️");
  v = v.replace(/print/g, "🖨️");
  v = v.replace(/target/g, "🎯");
  v = v.replace(/ aim /g, "🎯");
  v = v.replace(/scope/g, "🔬");
  v = v.replace(/stop/g, "🛑");
  v = v.replace(/stop/g, "🛑");
  v = v.replace(/stop/g, "🛑");


  v = v.replace(/thinking/g, "🤔");
  v = v.replace(/think/g, "🤔");
  v = v.replace(/think/g, "💭");

  v = v.replace(/a/g, "🅰️");
  v = v.replace(/b/g, "🅱️");
  v = v.replace(/ up /g, "🆙");

  textNode.nodeValue = v;
}

walk(document.body);
