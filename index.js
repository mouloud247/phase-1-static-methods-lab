class Formatter {
  //add static methods here
  static capitalize(toCapitalize) {
    return toCapitalize.charAt(0).toUpperCase() + toCapitalize.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")

  }




  static titleize(string) {
    const exceptions = {
      the: 'the',
      a: 'a',
      an: 'an',
      but: 'but',
      of: 'of',
      and: 'and',
      for: 'for',
      at: 'at',
      by: 'by',
      from: 'from'
    }
    const words = string.split(' ');


    const titleized = words.map(e => {

      if (exceptions.hasOwnProperty(e)) {
        return e;
      } else {
        return e.charAt(0).toUpperCase() + e.slice(1);

      }
    })

    titleized[0] = titleized[0].charAt(0).toUpperCase() + titleized[0].slice(1);
    return titleized.join(' ');
  }
}
