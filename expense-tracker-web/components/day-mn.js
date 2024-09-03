!(function (_, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e(require("dayjs")))
      : "function" == typeof define && define.amd
      ? define(["dayjs"], e)
      : ((_ =
          "undefined" != typeof globalThis
            ? globalThis
            : _ || self).dayjs_locale_mn = e(_.dayjs));
  })(this, function (_) {
    "use strict";
    function e(_) {
      return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
    }
    var t = e(_),
      d = {
        name: "mn",
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        months:
          "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
            "_"
          ),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        monthsShort:
          "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
            "_"
          ),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        ordinal: function (_) {
          return _;
        },
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm",
        },
        relativeTime: {
          future: "%s",
          past: "%s",
          s: "саяхан",
          m: "маргааш",
          mm: "%dминутын өмнө",
          h: "1цагийн өмнө",
          hh: "%dцагийн өмнө",
          d: "1өдрийн өмнө",
          dd: "%d өдрийн өмнө",
          M: "1сарын өмнө",
          MM: "%dсарын өмнө",
          y: "1жилийн өмнө",
          yy: "%dжилийн өмнө",
        },
      };
    return t.default.locale(d, null, !0), d;
  });