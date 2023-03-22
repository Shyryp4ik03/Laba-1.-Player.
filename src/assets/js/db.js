
// Песни

const musictrack1 = 
    'https://cdn.drivemusic.me/dl/online/z05cjKu8eqoeRNkbg8tu9A/1679460216/download_music/2021/12/green-day-troubled-times.mp3';
const musictrack2 = 
    'https://cdn.drivemusic.me/dl/online/A13I0fWMFRv-vfiUYIPpfw/1679460641/download_music/2020/03/alla-pugacheva-jetot-mir.mp3';
const musictrack3 = 
    'https://cdn.drivemusic.me/dl/online/YxaMyeooDjkMH_yWTcxTZw/1679459812/download_music/2014/07/eminem-mockingbird.mp3';
  
let tracksList = [
    {
        id: 1,
        title: 'Trouble Times - Green',
        trackURL: musictrack1,
        isFavourite: false,
    },
    {
        id: 2,
        title: 'Алла Пугачёва - Этот мир',
        trackURL: musictrack2,
        isFavourite: true,
    },
    {
        id: 3,
        title: 'Eminem - Mockingbird',
        trackURL: musictrack3,
        isFavourite: true,
    },
];

export default tracksList;
