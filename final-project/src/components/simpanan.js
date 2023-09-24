function formatRupiah(angka, prefix = 'Rp. ') {
    if (typeof angka !== 'number') {
      return prefix + '0';
    } 

    const angkaString = angka.toFixed(2);

    if (angkaString === '0.00') {
      return prefix + '0';
    }
  
    var number_string = angkaString.replace(/[^,\d]/g, ''),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/g),
      separator = '';
  
    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
  
    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix + rupiah;
  }