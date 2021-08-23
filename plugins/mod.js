const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'mod', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/DvJKaDy.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*short list*
*https://github.com/nexusNw/filo/*         
          ```:-owned by nexusNw```
*https://github.com/cyberchekuthan/Amalser_v1/*
             ```owned by Amalser```
*https://github.com/farhan-dqz/JulieMwol/*
          ```owned by Farhan-dqz```
*https://github.com/saidalisaid2/Liyamol/*
           ```owned by saidali```
*https://github.com/J-I-H-A-D/ElsaMwol/*
          ```owned by Jihad```
*https://github.com/afnanplk/lastpink*
               ```owned by Afnan plk```
*https://github.com/ameer-kallumthodi/pikachu*
           ```owned by ameer kallumthodi```
      ~*its just a small list.to more gits available 🙂*~
`}) 

}));
