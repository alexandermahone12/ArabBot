const { MessageButton } = require("discord-buttons")
module.exports = {
    name: 'story',
    description: 'Null',
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const link1 = 'https://www.ibnulyemenarabic.com/arabic-language/arabic-short-story-for-beginners-18/'
        const description1 = `
        This Arabic short story is for beginners, namely for non-Arabs. It is taken from a short story book entitled Al-Arandas. This book is written by Kamel Kilani. The original text is meant for native speakers of Arabic, hence written in more advanced Arabic. This Arabic short story for beginners has been abridged and simplified to be suitable for new learners of the Arabic language. 
        `
        const description1Ar = `
        هذه القصة القصيرة باللغة العربية للمبتدئين ، وتحديداً لغير العرب. وهي مأخوذة من كتاب قصة قصيرة بعنوان الأرندس. النص الأصلي مخصص للناطقين باللغة العربية ، وبالتالي تمت كتابته بلغة عربية أكثر تقدمًا. تم اختصار هذه القصة العربية القصيرة للمبتدئين وتبسيطها لتكون مناسبة لمتعلمي اللغة العربية.
        `

        const image1 = 'https://www.ibnulyemenarabic.com/wp-content/uploads/2021/08/%D8%A7%D9%84%D8%B9%D8%B1%D9%86%D8%AF%D8%B3-%D9%83%D8%A7%D9%85%D9%84-%D9%83%D9%8A%D9%84%D8%A7%D9%86%D9%8A.png'


        if(profiledata.language === 'en'){

            
            const embedEn1 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle("*Short arabic stories: الْعَرَنْدَسُ - Arandas*")
            .setDescription(`${description1}`)
            .setImage(image1)
            const download_button = new MessageButton()
                    .setStyle("url")
                    .setLabel("Click here to read the story")
                    .setURL(link1)
            
            message.channel.send(embedEn1, download_button);
            return
        }else{
            const embedAr1 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle("*قصص عربية قصيرة : الْعَرَنْدَس*")
            .setDescription(`${description1Ar}`)
            .setImage(image1)
            const download_button2 = new MessageButton()
                    .setStyle("url")
                    .setLabel("اضغط هنا لقراءة القصة")
                    .setURL(link1)
            
            message.channel.send(embedAr1, download_button2);
            return
        }
        

    }
}