/**
 * @name RandomWallpaper
 * @author Skaffa
 * @description Changes Discord wallpaper to random image. You can easily add more images by editing the script. 
 * @version 0.0.2
 */

 module.exports = class RandomWallpaper {
    start() {

		const images = [
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953202896093184/148428.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953202657005648/58360.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953201805566034/148438.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953201113510008/148418.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953200496951326/148421.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953199758753792/148425.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953132121391195/148482.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953131345444956/148525.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953130825363538/148442.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014953130569498745/148443.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957466682937354/scenic_sunset_4k.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957291218415656/398858.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957233135702057/398913.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957232338780230/253810.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957231302787102/398885.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1014957230870777966/308416.jpg',//V

			'https://cdn.discordapp.com/attachments/959200642105212998/1015354700754866286/mattia-zanon-oDIke03yMdY-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354701027487795/marek-piwnicki-SCCMEAJqEZE-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354701342056528/felix-besombes-U4GurxEYoAk-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354701652426812/juskteez-vu-mwhklqGVzck-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354702143172649/caglar-oskay-uOLIOTOVMaI-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354702474530836/kym-mackinnon-FWOmuvSdlLk-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015354996138721340/lubo-minar-B-gb_8fgmz8-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355054515044413/jonatan-pie-h8nxGssjQXs-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355055240650832/lubo-minar-q9hgGGMi0XA-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355055655882882/zoltan-tasi--Qi1aO87fP4-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355165341122620/jake-heidecker-_dbv-ynlmg4-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355165911556106/kyle-hinkson-yPcnVtZY4QM-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355273545785404/wengang-zhai-CK3j0e9oV18-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355274195898479/kristopher-roller-zepnJQycr4U-unsplash.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355274896343141/291775.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015355574617129030/992057.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015356309043953704/1018474.jpg',//
			'https://cdn.discordapp.com/attachments/959200642105212998/1015356658144264232/550113.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015356658769207346/555691.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015357968444817458/814309.jpg',//V
			'https://cdn.discordapp.com/attachments/959200642105212998/1015358010052333579/828069.jpg'//V
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