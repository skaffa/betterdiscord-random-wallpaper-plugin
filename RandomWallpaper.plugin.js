/**
 * @name RandomWallpaper
 * @author Skaffa
 * @description Changes Discord wallpaper to random image. You can easily add more images by editing the script. 
 * @version 0.0.1
 */

module.exports = class RandomWallpaper {
    start() {

		const images = [
			'https://cdn.discordapp.com/attachments/959200642105212998/1014671762685972561/scenic_sunset_4k.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953202896093184/148428.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953202657005648/58360.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953202078191766/148436.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953201805566034/148438.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953201113510008/148418.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953200496951326/148421.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953200094302309/148423.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953199758753792/148425.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953132662464542/17515.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953132406608032/148456.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953132121391195/148482.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953131878129705/148503.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953131609698425/148523.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953131345444956/148525.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953130825363538/148442.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953130569498745/148443.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953130338820146/148446.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957466682937354/scenic_sunset_4k.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957466359967834/neon-dream-by-jr-korpa-wallpaper.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957291218415656/398858.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957290891264131/50931.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957233836138576/148481.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957233135702057/398913.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957232338780230/253810.jpg',
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957231302787102/398885.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957230870777966/308416.jpg',//V
		];

		changeWallpaper();
		function changeWallpaper() {
			const image = images[Math.floor(Math.random()*images.length)];

			let element = document.querySelector('.app-3xd6d0').style;

			element.background = `url('${image}')`;
			element.backgroundPosition = "center";
			element.backgroundSize = "100vw 100vh";
			element.backgroundRepeat = "no-repeat";
			console.log('Current wallpaper:');
			console.log(image);
		}



    }

    stop() {
      // Called when the plugin is deactivated
    }


}