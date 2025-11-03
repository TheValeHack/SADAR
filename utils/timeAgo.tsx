export function timeAgo(tanggal: string | Date): string {
  const sekarang: number = Date.now();
  
  const waktuTarget: number = new Date(tanggal).getTime();
  
  const selisihMilidetik: number = sekarang - waktuTarget;

  if (selisihMilidetik < 0) {
      return new Date(tanggal).toLocaleDateString('id-ID'); 
  }

  const detik: number = Math.round(selisihMilidetik / 1000);
  const menit: number = Math.round(detik / 60);
  const jam: number = Math.round(menit / 60);
  const hari: number = Math.round(jam / 24);

  if (detik < 60) {
    return "baru saja";
  } else if (menit < 60) {
    return `${menit} menit lalu`;
  } else if (jam < 24) {
    return `${jam} jam lalu`;
  } else if (hari < 30) {
    return `${hari} hari lalu`;
  } else {
    return new Date(tanggal).toLocaleDateString('id-ID'); 
  }
}