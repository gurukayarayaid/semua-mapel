(function (global) {
  'use strict';

  // Gabungan bank soal semua mapel - Kelas 3 SD Semester Ganjil
  // Dimuat SETELAH js/soal/<mapel>.js (array global.SoalParts diisi tiap bank).
  const parts = (global.SoalParts || []).slice();

  const list = [];
  const subjects = [];
  let id = 0;

  parts.forEach((p) => {
    subjects.push({ key: p.key, name: p.name, count: p.list.length });
    p.list.forEach((s) => {
      s.id = ++id;
      s.subj = p.key;
      list.push(s);
    });
  });

  const kategori = [];
  list.forEach((s) => {
    if (kategori.indexOf(s.k) === -1) kategori.push(s.k);
  });

  function part(key) {
    for (let i = 0; i < parts.length; i++) if (parts[i].key === key) return parts[i];
    return null;
  }

  function nameOf(key) {
    const p = part(key);
    return p ? p.name : '';
  }

  function listOf(key) {
    const p = part(key);
    return p ? p.list : list;
  }

  global.Soal = {
    list: list,
    kategori: kategori,
    subjects: subjects,
    parts: parts,
    part: part,
    nameOf: nameOf,
    listOf: listOf,
    total: list.length
  };
})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = (typeof window !== 'undefined' ? window : globalThis).Soal;
}
