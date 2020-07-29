export function utf8_codepoint_length(buf, pos, codepoints) {
  var tmp = pos;

  /* From table 3-6 in the Unicode standard 4.0: Well-Formed UTF-8
   * Byte Sequences
   *
   *  Code Points   1st Byte  2nd Byte  3rd Byte  4th Byte
   * 000000-00007f   00-7f
   * 000080-0007ff   c2-df     80-bf
   * 000800-000fff    e0       a0-bf     80-bf
   * 001000-00cfff   e1-ec     80-bf     80-bf
   * 00d000-00d7ff    ed       80-9f     80-bf
   * 00e000-00ffff   ee-ef     80-bf     80-bf
   * 010000-03ffff    f0       90-bf     80-bf     80-bf
   * 040000-0fffff   f1-f3     80-bf     80-bf     80-bf
   * 100000-10ffff    f4       80-8f     80-bf     80-bf
   */

  while (codepoints--) {
    var c = buf.getUint8(pos);
    pos ++;
    if (c <= 0x7f) continue;
    if (c <  0xc2)
      throw new Error("Invalid UTF8 sequence.");
    pos ++;
    if (c <= 0xdf) continue;
    pos ++;
    if (c <= 0xef) continue;
    pos ++;
    if (c <= 0xf4) continue;

    throw new Error("Invalid UTF8 sequence.");
  }

  return pos - tmp;
}

