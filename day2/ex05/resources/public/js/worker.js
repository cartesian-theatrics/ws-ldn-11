cljs.tools = {};
cljs.tools.reader = {};
cljs.tools.reader.impl = {};
cljs.tools.reader.impl.utils = {};
cljs.tools.reader.impl.utils.char$ = function(a) {
  return null == a ? null : cljs.core.char$.call(null, a);
};
cljs.tools.reader.impl.utils.ex_info_QMARK_ = function(a) {
  return a instanceof cljs.core.ExceptionInfo;
};
cljs.tools.reader.impl.utils.ReaderConditional = function(a, b, c, d, e) {
  this.splicing_QMARK_ = a;
  this.form = b;
  this.__meta = c;
  this.__extmap = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, b, null);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  switch(b instanceof cljs.core.Keyword ? b.fqn : null) {
    case "splicing?":
      return this.splicing_QMARK_;
    case "form":
      return this.form;
    default:
      return cljs.core.get.call(null, this.__extmap, b, c);
  }
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  return cljs.core.reduce.call(null, function(a) {
    return function(a, c) {
      var d = cljs.core.nth.call(null, c, 0, null);
      c = cljs.core.nth.call(null, c, 1, null);
      return b.call(null, a, d, c);
    };
  }(this), c, this);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  a = function(a) {
    return function(a) {
      return cljs.core.pr_sequential_writer.call(null, b, cljs.core.pr_writer, "", " ", "", c, a);
    };
  }(this);
  return cljs.core.pr_sequential_writer.call(null, b, a, "#cljs.tools.reader.impl.utils.ReaderConditional{", ", ", "}", c, cljs.core.concat.call(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), this.splicing_QMARK_], null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, 
  "form", "form", -1624062471), this.form], null)], null), this.__extmap));
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = function(a) {
  return new cljs.core.RecordIter(0, this, 2, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), new cljs.core.Keyword(null, "form", "form", -1624062471)], null), cljs.core.truth_(this.__extmap) ? cljs.core._iterator.call(null, this.__extmap) : cljs.core.nil_iter.call(null));
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = function(a) {
  return this.__meta;
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = function(a) {
  return new cljs.tools.reader.impl.utils.ReaderConditional(this.splicing_QMARK_, this.form, this.__meta, this.__extmap, this.__hash);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 2 + cljs.core.count.call(null, this.__extmap);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  a = this.__hash;
  return null != a ? a : this.__hash = a = function(a, c) {
    return function(a) {
      return -209062840 ^ cljs.core.hash_unordered_coll.call(null, a);
    };
  }(a, this).call(null, this);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return null != b && this.constructor === b.constructor && cljs.core._EQ_.call(null, this.splicing_QMARK_, b.splicing_QMARK_) && cljs.core._EQ_.call(null, this.form, b.form) && cljs.core._EQ_.call(null, this.__extmap, b.__extmap);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  return cljs.core.contains_QMARK_.call(null, new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), null, new cljs.core.Keyword(null, "form", "form", -1624062471), null], null), null), b) ? cljs.core.dissoc.call(null, cljs.core._with_meta.call(null, cljs.core.into.call(null, cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), b) : new cljs.tools.reader.impl.utils.ReaderConditional(this.splicing_QMARK_, 
  this.form, this.__meta, cljs.core.not_empty.call(null, cljs.core.dissoc.call(null, this.__extmap, b)), null);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = cljs.core.keyword_identical_QMARK_;
  return cljs.core.truth_(a.call(null, new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), b)) ? new cljs.tools.reader.impl.utils.ReaderConditional(c, this.form, this.__meta, this.__extmap, null) : cljs.core.truth_(a.call(null, new cljs.core.Keyword(null, "form", "form", -1624062471), b)) ? new cljs.tools.reader.impl.utils.ReaderConditional(this.splicing_QMARK_, c, this.__meta, this.__extmap, null) : new cljs.tools.reader.impl.utils.ReaderConditional(this.splicing_QMARK_, this.form, 
  this.__meta, cljs.core.assoc.call(null, this.__extmap, b, c), null);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.seq.call(null, cljs.core.concat.call(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.MapEntry(new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), this.splicing_QMARK_, null), new cljs.core.MapEntry(new cljs.core.Keyword(null, "form", "form", -1624062471), this.form, null)], null), this.__extmap));
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.tools.reader.impl.utils.ReaderConditional(this.splicing_QMARK_, this.form, b, this.__extmap, this.__hash);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? this.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, this, b);
};
cljs.tools.reader.impl.utils.ReaderConditional.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "splicing?", "splicing?", 1211935161, null), new cljs.core.Symbol(null, "form", "form", 16469056, null)], null);
};
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = !0;
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = function(a) {
  return new cljs.core.List(null, "cljs.tools.reader.impl.utils/ReaderConditional", null, 1, null);
};
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = function(a, b) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.impl.utils/ReaderConditional");
};
cljs.tools.reader.impl.utils.__GT_ReaderConditional = function(a, b) {
  return new cljs.tools.reader.impl.utils.ReaderConditional(a, b, null, null, null);
};
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = function(a) {
  var b = cljs.core.dissoc.call(null, a, new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366), new cljs.core.Keyword(null, "form", "form", -1624062471));
  b = cljs.core.record_QMARK_.call(null, a) ? cljs.core.into.call(null, cljs.core.PersistentArrayMap.EMPTY, b) : b;
  return new cljs.tools.reader.impl.utils.ReaderConditional((new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366)).cljs$core$IFn$_invoke$arity$1(a), (new cljs.core.Keyword(null, "form", "form", -1624062471)).cljs$core$IFn$_invoke$arity$1(a), null, cljs.core.not_empty.call(null, b), null);
};
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = function(a) {
  return a instanceof cljs.tools.reader.impl.utils.ReaderConditional;
};
cljs.tools.reader.impl.utils.reader_conditional = function(a, b) {
  return new cljs.tools.reader.impl.utils.ReaderConditional(b, a, null, null, null);
};
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function(a, b, c) {
  cljs.core._write.call(null, b, ["#?", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.truth_((new cljs.core.Keyword(null, "splicing?", "splicing?", -428596366)).cljs$core$IFn$_invoke$arity$1(this)) ? "@" : null)].join(""));
  return cljs.core.pr_writer.call(null, (new cljs.core.Keyword(null, "form", "form", -1624062471)).cljs$core$IFn$_invoke$arity$1(this), b, c);
};
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
cljs.tools.reader.impl.utils.whitespace_QMARK_ = function(a) {
  return null == a ? null : "," === a ? !0 : cljs.tools.reader.impl.utils.ws_rx.test(a);
};
cljs.tools.reader.impl.utils.numeric_QMARK_ = function(a) {
  return null == a ? null : goog.string.isNumeric(a);
};
cljs.tools.reader.impl.utils.newline_QMARK_ = function(a) {
  return "\n" === a || "\n" === a || null == a;
};
cljs.tools.reader.impl.utils.desugar_meta = function(a) {
  return a instanceof cljs.core.Keyword ? cljs.core.PersistentArrayMap.createAsIfByAssoc([a, !0]) : a instanceof cljs.core.Symbol ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), a], null) : "string" === typeof a ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), a], null) : a;
};
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null, 0);
cljs.tools.reader.impl.utils.next_id = function() {
  return cljs.core.swap_BANG_.call(null, cljs.tools.reader.impl.utils.last_id, cljs.core.inc);
};
cljs.tools.reader.impl.utils.namespace_keys = function(a, b) {
  return function e(b) {
    return new cljs.core.LazySeq(null, function() {
      for (;;) {
        var d = cljs.core.seq.call(null, b);
        if (d) {
          if (cljs.core.chunked_seq_QMARK_.call(null, d)) {
            var g = cljs.core.chunk_first.call(null, d), h = cljs.core.count.call(null, g), k = cljs.core.chunk_buffer.call(null, h);
            return function() {
              for (var b = 0;;) {
                if (b < h) {
                  var d = cljs.core._nth.call(null, g, b);
                  cljs.core.chunk_append.call(null, k, d instanceof cljs.core.Symbol || d instanceof cljs.core.Keyword ? function() {
                    var b = cljs.core.juxt.call(null, cljs.core.namespace, cljs.core.name).call(null, d), e = cljs.core.nth.call(null, b, 0, null);
                    b = cljs.core.nth.call(null, b, 1, null);
                    var f = d instanceof cljs.core.Symbol ? cljs.core.symbol : cljs.core.keyword;
                    return null == e ? f.call(null, a, b) : cljs.core._EQ_.call(null, "_", e) ? f.call(null, b) : d;
                  }() : d);
                  b += 1;
                } else {
                  return !0;
                }
              }
            }() ? cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, k), e.call(null, cljs.core.chunk_rest.call(null, d))) : cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, k), null);
          }
          var l = cljs.core.first.call(null, d);
          return cljs.core.cons.call(null, l instanceof cljs.core.Symbol || l instanceof cljs.core.Keyword ? function() {
            var b = cljs.core.juxt.call(null, cljs.core.namespace, cljs.core.name).call(null, l), d = cljs.core.nth.call(null, b, 0, null);
            b = cljs.core.nth.call(null, b, 1, null);
            var e = l instanceof cljs.core.Symbol ? cljs.core.symbol : cljs.core.keyword;
            return null == d ? e.call(null, a, b) : cljs.core._EQ_.call(null, "_", d) ? e.call(null, b) : l;
          }() : l, e.call(null, cljs.core.rest.call(null, d)));
        }
        return null;
      }
    }, null, null);
  }.call(null, b);
};
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = function(a) {
  var b = cljs.core.nth.call(null, a, 0, null);
  a = cljs.core.nth.call(null, a, 1, null);
  return cljs.core.truth_(b) ? null : a;
};
cljs.tools.reader.impl.utils.char_code = function(a, b) {
  a = parseInt(a, b);
  return cljs.core.truth_(isNaN(a)) ? -1 : a;
};
cljs.tools.reader.reader_types = {};
cljs.tools.reader.reader_types.Reader = function() {
};
cljs.tools.reader.reader_types.read_char = function(a) {
  if (null != a && null != a.cljs$tools$reader$reader_types$Reader$read_char$arity$1) {
    return a.cljs$tools$reader$reader_types$Reader$read_char$arity$1(a);
  }
  var b = cljs.tools.reader.reader_types.read_char[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.call(null, a);
  }
  b = cljs.tools.reader.reader_types.read_char._;
  if (null != b) {
    return b.call(null, a);
  }
  throw cljs.core.missing_protocol.call(null, "Reader.read-char", a);
};
cljs.tools.reader.reader_types.peek_char = function(a) {
  if (null != a && null != a.cljs$tools$reader$reader_types$Reader$peek_char$arity$1) {
    return a.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(a);
  }
  var b = cljs.tools.reader.reader_types.peek_char[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.call(null, a);
  }
  b = cljs.tools.reader.reader_types.peek_char._;
  if (null != b) {
    return b.call(null, a);
  }
  throw cljs.core.missing_protocol.call(null, "Reader.peek-char", a);
};
cljs.tools.reader.reader_types.IPushbackReader = function() {
};
cljs.tools.reader.reader_types.unread = function(a, b) {
  if (null != a && null != a.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2) {
    return a.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(a, b);
  }
  var c = cljs.tools.reader.reader_types.unread[goog.typeOf(null == a ? null : a)];
  if (null != c) {
    return c.call(null, a, b);
  }
  c = cljs.tools.reader.reader_types.unread._;
  if (null != c) {
    return c.call(null, a, b);
  }
  throw cljs.core.missing_protocol.call(null, "IPushbackReader.unread", a);
};
cljs.tools.reader.reader_types.IndexingReader = function() {
};
cljs.tools.reader.reader_types.get_line_number = function(a) {
  if (null != a && null != a.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1) {
    return a.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(a);
  }
  var b = cljs.tools.reader.reader_types.get_line_number[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.call(null, a);
  }
  b = cljs.tools.reader.reader_types.get_line_number._;
  if (null != b) {
    return b.call(null, a);
  }
  throw cljs.core.missing_protocol.call(null, "IndexingReader.get-line-number", a);
};
cljs.tools.reader.reader_types.get_column_number = function(a) {
  if (null != a && null != a.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1) {
    return a.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(a);
  }
  var b = cljs.tools.reader.reader_types.get_column_number[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.call(null, a);
  }
  b = cljs.tools.reader.reader_types.get_column_number._;
  if (null != b) {
    return b.call(null, a);
  }
  throw cljs.core.missing_protocol.call(null, "IndexingReader.get-column-number", a);
};
cljs.tools.reader.reader_types.get_file_name = function(a) {
  if (null != a && null != a.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1) {
    return a.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(a);
  }
  var b = cljs.tools.reader.reader_types.get_file_name[goog.typeOf(null == a ? null : a)];
  if (null != b) {
    return b.call(null, a);
  }
  b = cljs.tools.reader.reader_types.get_file_name._;
  if (null != b) {
    return b.call(null, a);
  }
  throw cljs.core.missing_protocol.call(null, "IndexingReader.get-file-name", a);
};
cljs.tools.reader.reader_types.StringReader = function(a, b, c) {
  this.s = a;
  this.s_len = b;
  this.s_pos = c;
};
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = function(a) {
  return this.s_len > this.s_pos ? (a = this.s.charAt(this.s_pos), this.s_pos += 1, a) : null;
};
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = function(a) {
  return this.s_len > this.s_pos ? this.s.charAt(this.s_pos) : null;
};
cljs.tools.reader.reader_types.StringReader.getBasis = function() {
  return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "s", "s", -948495851, null), new cljs.core.Symbol(null, "s-len", "s-len", 1869978331, null), cljs.core.with_meta(new cljs.core.Symbol(null, "s-pos", "s-pos", -540562492, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.tools.reader.reader_types.StringReader.cljs$lang$type = !0;
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/StringReader";
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.reader-types/StringReader");
};
cljs.tools.reader.reader_types.__GT_StringReader = function(a, b, c) {
  return new cljs.tools.reader.reader_types.StringReader(a, b, c);
};
cljs.tools.reader.reader_types.NodeReadableReader = function(a, b) {
  this.readable = a;
  this.buf = b;
};
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = function(a) {
  if (cljs.core.truth_(this.buf)) {
    return a = this.buf[0], this.buf = null, cljs.tools.reader.impl.utils.char$.call(null, a);
  }
  a = cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.readable.read(1));
  return cljs.core.truth_(a) ? cljs.tools.reader.impl.utils.char$.call(null, a) : null;
};
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = function(a) {
  cljs.core.truth_(this.buf) || (this.buf = cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.readable.read(1)));
  return cljs.core.truth_(this.buf) ? cljs.tools.reader.impl.utils.char$.call(null, this.buf[0]) : null;
};
cljs.tools.reader.reader_types.NodeReadableReader.getBasis = function() {
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null, "readable", "readable", 2113054478, null), cljs.core.with_meta(new cljs.core.Symbol(null, "buf", "buf", 1426618187, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$type = !0;
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/NodeReadableReader";
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.reader-types/NodeReadableReader");
};
cljs.tools.reader.reader_types.__GT_NodeReadableReader = function(a, b) {
  return new cljs.tools.reader.reader_types.NodeReadableReader(a, b);
};
cljs.tools.reader.reader_types.PushbackReader = function(a, b, c, d) {
  this.rdr = a;
  this.buf = b;
  this.buf_len = c;
  this.buf_pos = d;
};
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = function(a) {
  a = this.buf_pos < this.buf_len ? this.buf[this.buf_pos] : cljs.tools.reader.reader_types.read_char.call(null, this.rdr);
  this.buf_pos < this.buf_len && (this.buf_pos += 1);
  return cljs.tools.reader.impl.utils.char$.call(null, a);
};
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = function(a) {
  a = this.buf_pos < this.buf_len ? this.buf[this.buf_pos] : cljs.tools.reader.reader_types.peek_char.call(null, this.rdr);
  return cljs.tools.reader.impl.utils.char$.call(null, a);
};
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = function(a, b) {
  if (cljs.core.truth_(b)) {
    if (0 === this.buf_pos) {
      throw Error("Pushback buffer is full");
    }
    --this.buf_pos;
    return this.buf[this.buf_pos] = b;
  }
  return null;
};
cljs.tools.reader.reader_types.PushbackReader.getBasis = function() {
  return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "rdr", "rdr", 190007785, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "not-native", "not-native", -236392494, null)], null)), new cljs.core.Symbol(null, "buf", "buf", 1426618187, null), new cljs.core.Symbol(null, "buf-len", "buf-len", 404510846, null), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "buf-pos", "buf-pos", -807229033, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null))], null);
};
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$type = !0;
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/PushbackReader";
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.reader-types/PushbackReader");
};
cljs.tools.reader.reader_types.__GT_PushbackReader = function(a, b, c, d) {
  return new cljs.tools.reader.reader_types.PushbackReader(a, b, c, d);
};
cljs.tools.reader.reader_types.normalize_newline = function(a, b) {
  return "\r" === b ? (b = cljs.tools.reader.reader_types.peek_char.call(null, a), "\f" !== b && "\n" !== b || cljs.tools.reader.reader_types.read_char.call(null, a), "\n") : b;
};
cljs.tools.reader.reader_types.IndexingPushbackReader = function(a, b, c, d, e, f, g) {
  this.rdr = a;
  this.line = b;
  this.column = c;
  this.line_start_QMARK_ = d;
  this.prev = e;
  this.prev_column = f;
  this.file_name = g;
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = function(a) {
  a = cljs.tools.reader.reader_types.read_char.call(null, this.rdr);
  return cljs.core.truth_(a) ? (a = cljs.tools.reader.reader_types.normalize_newline.call(null, this.rdr, a), this.prev = this.line_start_QMARK_, this.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null, a), cljs.core.truth_(this.line_start_QMARK_) && (this.prev_column = this.column, this.column = 0, this.line += 1), this.column += 1, a) : null;
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = function(a) {
  return cljs.tools.reader.reader_types.peek_char.call(null, this.rdr);
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = function(a, b) {
  cljs.core.truth_(this.line_start_QMARK_) ? (--this.line, this.column = this.prev_column) : --this.column;
  this.line_start_QMARK_ = this.prev;
  return cljs.tools.reader.reader_types.unread.call(null, this.rdr, b);
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = function(a) {
  return this.line | 0;
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = function(a) {
  return this.column | 0;
};
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = function(a) {
  return this.file_name;
};
cljs.tools.reader.reader_types.IndexingPushbackReader.getBasis = function() {
  return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "rdr", "rdr", 190007785, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "not-native", "not-native", -236392494, null)], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "line", "line", 1852876762, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "column", "column", -576213674, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "line-start?", "line-start?", 1357012474, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "prev", "prev", 43462301, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "prev-column", "prev-column", 324083974, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "file-name", "file-name", -13685732, null)], null);
};
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$type = !0;
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/IndexingPushbackReader";
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.reader-types/IndexingPushbackReader");
};
cljs.tools.reader.reader_types.__GT_IndexingPushbackReader = function(a, b, c, d, e, f, g) {
  return new cljs.tools.reader.reader_types.IndexingPushbackReader(a, b, c, d, e, f, g);
};
cljs.tools.reader.reader_types.merge_meta = function(a, b) {
  var c = cljs.core.meta.call(null, a);
  return cljs.core.with_meta.call(null, a, cljs.core.merge.call(null, b, cljs.core.dissoc.call(null, c, new cljs.core.Keyword(null, "source", "source", -433931539))));
};
cljs.tools.reader.reader_types.peek_source_log = function(a) {
  return cljs.core.subs.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null, "buffer", "buffer", 617295198)).cljs$core$IFn$_invoke$arity$1(a)), cljs.core.first.call(null, (new cljs.core.Keyword(null, "offset", "offset", 296498311)).cljs$core$IFn$_invoke$arity$1(a)));
};
cljs.tools.reader.reader_types.log_source_char = function(a, b) {
  a = (new cljs.core.Keyword(null, "buffer", "buffer", 617295198)).cljs$core$IFn$_invoke$arity$1(a);
  return cljs.core.truth_(a) ? a.append(b) : null;
};
cljs.tools.reader.reader_types.drop_last_logged_char = function(a) {
  a = (new cljs.core.Keyword(null, "buffer", "buffer", 617295198)).cljs$core$IFn$_invoke$arity$1(a);
  return cljs.core.truth_(a) ? a.set(cljs.core.subs.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), 0, a.getLength() - 1)) : null;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader = function(a, b, c, d, e, f, g, h) {
  this.rdr = a;
  this.line = b;
  this.column = c;
  this.line_start_QMARK_ = d;
  this.prev = e;
  this.prev_column = f;
  this.file_name = g;
  this.frames = h;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = function(a) {
  a = cljs.tools.reader.reader_types.read_char.call(null, this.rdr);
  return cljs.core.truth_(a) ? (a = cljs.tools.reader.reader_types.normalize_newline.call(null, this.rdr, a), this.prev = this.line_start_QMARK_, this.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null, a), cljs.core.truth_(this.line_start_QMARK_) && (this.prev_column = this.column, this.column = 0, this.line += 1), this.column += 1, cljs.tools.reader.reader_types.log_source_char.call(null, cljs.core.deref.call(null, this.frames), a), a) : null;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = function(a) {
  return cljs.tools.reader.reader_types.peek_char.call(null, this.rdr);
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = function(a, b) {
  cljs.core.truth_(this.line_start_QMARK_) ? (--this.line, this.column = this.prev_column) : --this.column;
  this.line_start_QMARK_ = this.prev;
  cljs.core.truth_(b) && cljs.tools.reader.reader_types.drop_last_logged_char.call(null, cljs.core.deref.call(null, this.frames));
  return cljs.tools.reader.reader_types.unread.call(null, this.rdr, b);
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = cljs.core.PROTOCOL_SENTINEL;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = function(a) {
  return this.line | 0;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = function(a) {
  return this.column | 0;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = function(a) {
  return this.file_name;
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.getBasis = function() {
  return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null, "rdr", "rdr", 190007785, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "tag", "tag", -1290361223), new cljs.core.Symbol(null, "not-native", "not-native", -236392494, null)], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "line", "line", 1852876762, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, 
  "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "column", "column", -576213674, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "line-start?", "line-start?", 1357012474, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, 
  "prev", "prev", 43462301, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), cljs.core.with_meta(new cljs.core.Symbol(null, "prev-column", "prev-column", 324083974, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "mutable", "mutable", 875778266), !0], null)), new cljs.core.Symbol(null, "file-name", "file-name", -13685732, null), new cljs.core.Symbol(null, "frames", "frames", -888748272, null)], 
  null);
};
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$type = !0;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/SourceLoggingPushbackReader";
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = function(a, b, c) {
  return cljs.core._write.call(null, b, "cljs.tools.reader.reader-types/SourceLoggingPushbackReader");
};
cljs.tools.reader.reader_types.__GT_SourceLoggingPushbackReader = function(a, b, c, d, e, f, g, h) {
  return new cljs.tools.reader.reader_types.SourceLoggingPushbackReader(a, b, c, d, e, f, g, h);
};
cljs.tools.reader.reader_types.indexing_reader_QMARK_ = function(a) {
  return null != a ? cljs.core.PROTOCOL_SENTINEL === a.cljs$tools$reader$reader_types$IndexingReader$ ? !0 : !1 : !1;
};
cljs.tools.reader.reader_types.string_reader = function(a) {
  return new cljs.tools.reader.reader_types.StringReader(a, cljs.core.count.call(null, a), 0);
};
cljs.tools.reader.reader_types.string_push_back_reader = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.reader_types.string_push_back_reader.call(null, a, 1);
};
cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return new cljs.tools.reader.reader_types.PushbackReader(cljs.tools.reader.reader_types.string_reader.call(null, a), cljs.core.object_array.call(null, b), b, b);
};
cljs.tools.reader.reader_types.string_push_back_reader.cljs$lang$maxFixedArity = 2;
cljs.tools.reader.reader_types.node_readable_push_back_reader = function(a) {
  return new cljs.tools.reader.reader_types.PushbackReader(new cljs.tools.reader.reader_types.NodeReadableReader(a, null), cljs.core.object_array.call(null, 1), 1, 1);
};
cljs.tools.reader.reader_types.indexing_push_back_reader = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null, a, 1);
};
cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null, a, b, null);
};
cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.tools.reader.reader_types.IndexingPushbackReader("string" === typeof a ? cljs.tools.reader.reader_types.string_push_back_reader.call(null, a, b) : a, 1, 1, !0, null, 0, c);
};
cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$lang$maxFixedArity = 3;
cljs.tools.reader.reader_types.source_logging_push_back_reader = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null, a, 1);
};
cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null, a, b, null);
};
cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return new cljs.tools.reader.reader_types.SourceLoggingPushbackReader("string" === typeof a ? cljs.tools.reader.reader_types.string_push_back_reader.call(null, a, b) : a, 1, 1, !0, null, 0, c, cljs.core.atom.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "buffer", "buffer", 617295198), new goog.string.StringBuffer, new cljs.core.Keyword(null, "offset", "offset", 296498311), cljs.core.list(0)], null)));
};
cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$lang$maxFixedArity = 3;
cljs.tools.reader.reader_types.read_line = function(a) {
  for (var b = cljs.tools.reader.reader_types.read_char.call(null, a), c = new goog.string.StringBuffer;;) {
    if (cljs.tools.reader.impl.utils.newline_QMARK_.call(null, b)) {
      return cljs.core.str.cljs$core$IFn$_invoke$arity$1(c);
    }
    var d = cljs.tools.reader.reader_types.read_char.call(null, a);
    c = c.append(b);
    b = d;
  }
};
cljs.tools.reader.reader_types.source_logging_reader_QMARK_ = function(a) {
  return a instanceof cljs.tools.reader.reader_types.SourceLoggingPushbackReader;
};
cljs.tools.reader.reader_types.line_start_QMARK_ = function(a) {
  return cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? 1 === cljs.tools.reader.reader_types.get_column_number.call(null, a) : null;
};
cljs.tools.reader.reader_types.log_source_STAR_ = function(a, b) {
  var c = (new cljs.core.Keyword(null, "buffer", "buffer", 617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null, a.frames));
  try {
    cljs.core.swap_BANG_.call(null, a.frames, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "offset", "offset", 296498311)], null), cljs.core.conj, c.getLength());
    var d = b.call(null);
    return null != d && (d.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === d.cljs$core$IMeta$) ? cljs.tools.reader.reader_types.merge_meta.call(null, d, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "source", "source", -433931539), cljs.tools.reader.reader_types.peek_source_log.call(null, cljs.core.deref.call(null, a.frames))], null)) : d;
  } finally {
    cljs.core.swap_BANG_.call(null, a.frames, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "offset", "offset", 296498311)], null), cljs.core.rest);
  }
};
cljs.tools.reader.impl.inspect = {};
cljs.tools.reader.impl.inspect.inspect_STAR__col = function(a, b, c, d) {
  var e = cljs.core.count.call(null, b);
  a = cljs.core.truth_(a) ? 0 : 10 < e ? 10 : e;
  b = cljs.core.map.call(null, cljs.core.partial.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, !0), cljs.core.take.call(null, a, b));
  b = cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, " ", b));
  e = a < e ? "..." : null;
  return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), cljs.core.str.cljs$core$IFn$_invoke$arity$1(e), cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join("");
};
cljs.tools.reader.impl.inspect.dispatch_inspect = function(a, b) {
  return null == b ? new cljs.core.Keyword(null, "nil", "nil", 99600501) : "string" === typeof b ? new cljs.core.Keyword(null, "string", "string", -1989541586) : b instanceof cljs.core.Keyword ? new cljs.core.Keyword(null, "strable", "strable", 1877668047) : "number" === typeof b ? new cljs.core.Keyword(null, "strable", "strable", 1877668047) : b instanceof cljs.core.Symbol ? new cljs.core.Keyword(null, "strable", "strable", 1877668047) : cljs.core.vector_QMARK_.call(null, b) ? new cljs.core.Keyword(null, 
  "vector", "vector", 1902966158) : cljs.core.list_QMARK_.call(null, b) ? new cljs.core.Keyword(null, "list", "list", 765357683) : cljs.core.map_QMARK_.call(null, b) ? new cljs.core.Keyword(null, "map", "map", 1371690461) : cljs.core.set_QMARK_.call(null, b) ? new cljs.core.Keyword(null, "set", "set", 304602554) : cljs.core._EQ_.call(null, b, !0) ? new cljs.core.Keyword(null, "strable", "strable", 1877668047) : cljs.core._EQ_.call(null, b, !1) ? new cljs.core.Keyword(null, "strable", "strable", 1877668047) : 
  cljs.core.type.call(null, b);
};
if ("undefined" === typeof cljs || "undefined" === typeof cljs.tools || "undefined" === typeof cljs.tools.reader || "undefined" === typeof cljs.tools.reader.impl || "undefined" === typeof cljs.tools.reader.impl.inspect || "undefined" === typeof cljs.tools.reader.impl.inspect.inspect_STAR_) {
  cljs.tools.reader.impl.inspect.inspect_STAR_ = function() {
    var a = cljs.core.atom.call(null, cljs.core.PersistentArrayMap.EMPTY), b = cljs.core.atom.call(null, cljs.core.PersistentArrayMap.EMPTY), c = cljs.core.atom.call(null, cljs.core.PersistentArrayMap.EMPTY), d = cljs.core.atom.call(null, cljs.core.PersistentArrayMap.EMPTY), e = cljs.core.get.call(null, cljs.core.PersistentArrayMap.EMPTY, new cljs.core.Keyword(null, "hierarchy", "hierarchy", -1053470341), cljs.core.get_global_hierarchy.call(null));
    return new cljs.core.MultiFn(cljs.core.symbol.call(null, "cljs.tools.reader.impl.inspect", "inspect*"), cljs.tools.reader.impl.inspect.dispatch_inspect, new cljs.core.Keyword(null, "default", "default", -1987822328), e, a, b, c, d);
  }();
}
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "string", "string", -1989541586), function(a, b) {
  var c = cljs.core.truth_(a) ? 5 : 20;
  a = b.length > c ? '..."' : '"';
  return [cljs.core.str.cljs$core$IFn$_invoke$arity$1('"'), cljs.core.str.cljs$core$IFn$_invoke$arity$1(b.substring(0, function() {
    var a = b.length;
    return c < a ? c : a;
  }())), cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join("");
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "strable", "strable", 1877668047), function(a, b) {
  return cljs.core.str.cljs$core$IFn$_invoke$arity$1(b);
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, cljs.core.IndexedSeq, function(a, b) {
  return "\x3cindexed seq\x3e";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, cljs.core.PersistentArrayMapSeq, function(a, b) {
  return "\x3cmap seq\x3e";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, cljs.core.NodeSeq, function(a, b) {
  return "\x3cmap seq\x3e";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, cljs.core.Cons, function(a, b) {
  return "\x3ccons\x3e";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, cljs.core.LazySeq, function(a, b) {
  return "\x3clazy seq\x3e";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "nil", "nil", 99600501), function(a, b) {
  return "nil";
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "list", "list", 765357683), function(a, b) {
  return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null, a, b, "(", ")");
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "map", "map", 1371690461), function(a, b) {
  var c = cljs.core.count.call(null, b), d = cljs.core.truth_(a) ? 0 : c;
  b = cljs.core.apply.call(null, cljs.core.concat, cljs.core.take.call(null, d, b));
  return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null, a, b, "{", c > d ? "...}" : "}");
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "set", "set", 304602554), function(a, b) {
  return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null, a, b, "#{", "}");
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "vector", "vector", 1902966158), function(a, b) {
  return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null, a, b, "[", "]");
});
cljs.core._add_method.call(null, cljs.tools.reader.impl.inspect.inspect_STAR_, new cljs.core.Keyword(null, "default", "default", -1987822328), function(a, b) {
  return cljs.core.pr_str.call(null, cljs.core.type.call(null, b));
});
cljs.tools.reader.impl.inspect.inspect = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.impl.inspect.inspect_STAR_.call(null, !1, a);
};
cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.tools.reader.impl.inspect.inspect_STAR_.call(null, a, b);
};
cljs.tools.reader.impl.inspect.inspect.cljs$lang$maxFixedArity = 2;
cljs.tools.reader.impl.errors = {};
cljs.tools.reader.impl.errors.ex_details = function(a, b) {
  b = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098), new cljs.core.Keyword(null, "ex-kind", "ex-kind", 1581199296), b], null);
  return cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? cljs.core.assoc.call(null, b, new cljs.core.Keyword(null, "file", "file", -1269645878), cljs.tools.reader.reader_types.get_file_name.call(null, a), new cljs.core.Keyword(null, "line", "line", 212345235), cljs.tools.reader.reader_types.get_line_number.call(null, a), new cljs.core.Keyword(null, "col", "col", -1959363084), cljs.tools.reader.reader_types.get_column_number.call(null, a)) : b;
};
cljs.tools.reader.impl.errors.throw_ex = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 2 < b.length ? new cljs.core.IndexedSeq(b.slice(2), 0, null) : null;
  return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
};
cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  a = cljs.tools.reader.impl.errors.ex_details.call(null, a, b);
  b = (new cljs.core.Keyword(null, "file", "file", -1269645878)).cljs$core$IFn$_invoke$arity$1(a);
  var d = (new cljs.core.Keyword(null, "line", "line", 212345235)).cljs$core$IFn$_invoke$arity$1(a), e = (new cljs.core.Keyword(null, "col", "col", -1959363084)).cljs$core$IFn$_invoke$arity$1(a);
  b = cljs.core.truth_(b) ? [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " "].join("") : null;
  d = cljs.core.truth_(d) ? ["[line ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(d), ", col ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(e), "]"].join("") : null;
  e = cljs.core.truth_(cljs.core.truth_(b) ? b : d) ? " " : null;
  c = cljs.core.apply.call(null, cljs.core.str, b, d, e, c);
  throw cljs.core.ex_info.call(null, c, a);
};
cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = 2;
cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a), c = cljs.core.next.call(null, a);
  a = cljs.core.first.call(null, c);
  c = cljs.core.next.call(null, c);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.tools.reader.impl.errors.reader_error = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.tools.reader.impl.errors.throw_ex.call(null, a, new cljs.core.Keyword(null, "reader-error", "reader-error", 1610253121), cljs.core.apply.call(null, cljs.core.str, b));
};
cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = 1;
cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a);
  a = cljs.core.next.call(null, a);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.tools.reader.impl.errors.illegal_arg_error = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.tools.reader.impl.errors.throw_ex.call(null, a, new cljs.core.Keyword(null, "illegal-argument", "illegal-argument", -1845493170), cljs.core.apply.call(null, cljs.core.str, b));
};
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = 1;
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a);
  a = cljs.core.next.call(null, a);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.tools.reader.impl.errors.eof_error = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.tools.reader.impl.errors.throw_ex.call(null, a, new cljs.core.Keyword(null, "eof", "eof", -489063237), cljs.core.apply.call(null, cljs.core.str, b));
};
cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = 1;
cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a);
  a = cljs.core.next.call(null, a);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.tools.reader.impl.errors.throw_eof_delimited = function(a) {
  switch(arguments.length) {
    case 4:
      return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.tools.reader.impl.errors.throw_eof_delimited.call(null, a, b, d, c, null);
};
cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return cljs.tools.reader.impl.errors.eof_error.call(null, a, "Unexpected EOF while reading ", cljs.core.truth_(e) ? ["item ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(e), " of "].join("") : null, cljs.core.name.call(null, b), cljs.core.truth_(c) ? [", starting at line ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), " and column ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join("") : null, ".");
};
cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5;
cljs.tools.reader.impl.errors.throw_odd_map = function(a, b, c, d) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "The map literal starting with ", cljs.tools.reader.impl.inspect.inspect.call(null, cljs.core.first.call(null, d)), cljs.core.truth_(b) ? [" on line ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), " column ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join("") : null, " contains ", cljs.core.count.call(null, d), " form(s). Map literals must contain an even number of forms.");
};
cljs.tools.reader.impl.errors.throw_invalid_number = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid number: ", b, ".");
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = function(a, b) {
  throw cljs.tools.reader.impl.errors.illegal_arg_error.call(null, a, "Invalid unicode literal: \\", b, ".");
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid unicode escape: \\u", b, ".");
};
cljs.tools.reader.impl.errors.throw_invalid = function(a, b, c) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid ", cljs.core.name.call(null, b), ": ", c, ".");
};
cljs.tools.reader.impl.errors.throw_eof_at_start = function(a, b) {
  return cljs.tools.reader.impl.errors.eof_error.call(null, a, "Unexpected EOF while reading start of ", cljs.core.name.call(null, b), ".");
};
cljs.tools.reader.impl.errors.throw_bad_char = function(a, b, c) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid character: ", c, " found while reading ", cljs.core.name.call(null, b), ".");
};
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = function(a) {
  return cljs.tools.reader.impl.errors.eof_error.call(null, a, "Unexpected EOF while reading dispatch character.");
};
cljs.tools.reader.impl.errors.throw_bad_dispatch = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "No dispatch macro for ", b, ".");
};
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Unmatched delimiter ", b, ".");
};
cljs.tools.reader.impl.errors.throw_eof_reading = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 2 < b.length ? new cljs.core.IndexedSeq(b.slice(2), 0, null) : null;
  return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], b);
};
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = function(a, b, c) {
  a: {
    var d = b instanceof cljs.core.Keyword ? b.fqn : null;
    switch(d) {
      case "regex":
        d = '#"';
        break a;
      case "string":
        d = '"';
        break a;
      default:
        throw Error(["No matching clause: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join(""));
    }
  }
  return cljs.tools.reader.impl.errors.eof_error.call(null, a, "Unexpected EOF reading ", cljs.core.name.call(null, b), " starting ", cljs.core.apply.call(null, cljs.core.str, d, c), ".");
};
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = 2;
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a), c = cljs.core.next.call(null, a);
  a = cljs.core.first.call(null, c);
  c = cljs.core.next.call(null, c);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a, c);
};
cljs.tools.reader.impl.errors.throw_no_dispatch = function(a, b) {
  return cljs.tools.reader.impl.errors.throw_bad_dispatch.call(null, a, b);
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid unicode character \\", b, ".");
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = function(a, b, c) {
  return cljs.tools.reader.impl.errors.illegal_arg_error.call(null, a, "Invalid digit ", b, " in unicode character \\", c, ".");
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = function(a, b) {
  return cljs.tools.reader.impl.errors.illegal_arg_error.call(null, a, "Invalid digit ", b, " in unicode character.");
};
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = function(a, b, c) {
  return cljs.tools.reader.impl.errors.illegal_arg_error.call(null, a, "Invalid unicode literal. Unicode literals should be ", c, "characters long.  ", "value suppled is ", b, "characters long.");
};
cljs.tools.reader.impl.errors.throw_invalid_character_literal = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid character literal \\u", b, ".");
};
cljs.tools.reader.impl.errors.throw_invalid_octal_len = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid octal escape sequence in a character literal:", b, ". Octal escape sequences must be 3 or fewer digits.");
};
cljs.tools.reader.impl.errors.throw_bad_octal_number = function(a) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Octal escape sequence must be in range [0, 377].");
};
cljs.tools.reader.impl.errors.throw_unsupported_character = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Unsupported character: ", b, ".");
};
cljs.tools.reader.impl.errors.throw_eof_in_character = function(a) {
  return cljs.tools.reader.impl.errors.eof_error.call(null, a, "Unexpected EOF while reading character.");
};
cljs.tools.reader.impl.errors.throw_bad_escape_char = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Unsupported escape character: \\", b, ".");
};
cljs.tools.reader.impl.errors.throw_single_colon = function(a) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "A single colon is not a valid keyword.");
};
cljs.tools.reader.impl.errors.throw_bad_metadata = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Metadata cannot be ", cljs.tools.reader.impl.inspect.inspect.call(null, b), ". Metadata must be a Symbol, Keyword, String or Map.");
};
cljs.tools.reader.impl.errors.throw_bad_metadata_target = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Metadata can not be applied to ", cljs.tools.reader.impl.inspect.inspect.call(null, b), ". ", "Metadata can only be applied to IMetas.");
};
cljs.tools.reader.impl.errors.throw_feature_not_keyword = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Feature cannot be ", cljs.tools.reader.impl.inspect.inspect.call(null, b), " Features must be keywords.");
};
cljs.tools.reader.impl.errors.throw_ns_map_no_map = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Namespaced map with namespace ", b, " does not specify a map.");
};
cljs.tools.reader.impl.errors.throw_bad_ns = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid value used as namespace in namespaced map: ", b, ".");
};
cljs.tools.reader.impl.errors.throw_bad_reader_tag = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid reader tag: ", cljs.tools.reader.impl.inspect.inspect.call(null, b), ". Reader tags must be symbols.");
};
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = function(a, b) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, "No reader function for tag ", cljs.tools.reader.impl.inspect.inspect.call(null, b), ".");
};
cljs.tools.reader.impl.errors.duplicate_keys_error = function(a, b) {
  b = function(a) {
    return function f(a) {
      return new cljs.core.LazySeq(null, function() {
        for (var b = a;;) {
          if (b = cljs.core.seq.call(null, b)) {
            if (cljs.core.chunked_seq_QMARK_.call(null, b)) {
              var c = cljs.core.chunk_first.call(null, b), e = cljs.core.count.call(null, c), l = cljs.core.chunk_buffer.call(null, e);
              a: {
                for (var m = 0;;) {
                  if (m < e) {
                    var n = cljs.core._nth.call(null, c, m), p = cljs.core.nth.call(null, n, 0, null);
                    1 < cljs.core.nth.call(null, n, 1, null) && cljs.core.chunk_append.call(null, l, p);
                    m += 1;
                  } else {
                    c = !0;
                    break a;
                  }
                }
              }
              return c ? cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, l), f.call(null, cljs.core.chunk_rest.call(null, b))) : cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, l), null);
            }
            l = cljs.core.first.call(null, b);
            c = cljs.core.nth.call(null, l, 0, null);
            if (1 < cljs.core.nth.call(null, l, 1, null)) {
              return cljs.core.cons.call(null, c, f.call(null, cljs.core.rest.call(null, b)));
            }
            b = cljs.core.rest.call(null, b);
          } else {
            return null;
          }
        }
      }, null, null);
    }.call(null, cljs.core.frequencies.call(null, a));
  }.call(null, b);
  return cljs.core.apply.call(null, cljs.core.str, a, 1 < cljs.core.count.call(null, b) ? "s" : null, ": ", cljs.core.interpose.call(null, ", ", b));
};
cljs.tools.reader.impl.errors.throw_dup_keys = function(a, b, c) {
  return cljs.tools.reader.impl.errors.reader_error.call(null, a, cljs.tools.reader.impl.errors.duplicate_keys_error.call(null, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null, cljs.core.name.call(null, b))), " literal contains duplicate key"].join(""), c));
};
cljs.tools.reader.impl.errors.throw_eof_error = function(a, b) {
  return cljs.core.truth_(b) ? cljs.tools.reader.impl.errors.eof_error.call(null, a, "EOF while reading, starting at line ", b, ".") : cljs.tools.reader.impl.errors.eof_error.call(null, a, "EOF while reading.");
};
cljs.tools.reader.impl.commons = {};
cljs.tools.reader.impl.commons.number_literal_QMARK_ = function(a, b) {
  return cljs.tools.reader.impl.utils.numeric_QMARK_.call(null, b) || ("+" === b || "-" === b) && cljs.tools.reader.impl.utils.numeric_QMARK_.call(null, cljs.tools.reader.reader_types.peek_char.call(null, a));
};
cljs.tools.reader.impl.commons.read_past = function(a, b) {
  for (var c = cljs.tools.reader.reader_types.read_char.call(null, b);;) {
    if (a.call(null, c)) {
      c = cljs.tools.reader.reader_types.read_char.call(null, b);
    } else {
      return c;
    }
  }
};
cljs.tools.reader.impl.commons.skip_line = function(a) {
  for (; !cljs.tools.reader.impl.utils.newline_QMARK_.call(null, cljs.tools.reader.reader_types.read_char.call(null, a));) {
  }
  return a;
};
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = function(a) {
  var b = cljs.core.vec.call(null, cljs.core.re_find.call(null, cljs.tools.reader.impl.commons.int_pattern, a));
  if (null != b.call(null, 2)) {
    return 0;
  }
  a = "-" === b.call(null, 1);
  b = null != b.call(null, 3) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b.call(null, 3), 10], null) : null != b.call(null, 4) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b.call(null, 4), 16], null) : null != b.call(null, 5) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b.call(null, 5), 8], null) : null != b.call(null, 7) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, 
  [b.call(null, 7), parseInt(b.call(null, 6))], null) : new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, null], null);
  var c = b.call(null, 0);
  if (null == c) {
    return null;
  }
  b = parseInt(c, b.call(null, 1));
  a = a ? -1 * b : b;
  return cljs.core.truth_(isNaN(a)) ? null : a;
};
cljs.tools.reader.impl.commons.match_ratio = function(a) {
  var b = cljs.core.vec.call(null, cljs.core.re_find.call(null, cljs.tools.reader.impl.commons.ratio_pattern, a));
  a = b.call(null, 1);
  b = b.call(null, 2);
  a = cljs.core.truth_(cljs.core.re_find.call(null, /^\+/, a)) ? cljs.core.subs.call(null, a, 1) : a;
  return parseInt(a) / parseInt(b);
};
cljs.tools.reader.impl.commons.match_float = function(a) {
  var b = cljs.core.vec.call(null, cljs.core.re_find.call(null, cljs.tools.reader.impl.commons.float_pattern, a));
  return null != b.call(null, 4) ? parseFloat(b.call(null, 1)) : parseFloat(a);
};
cljs.tools.reader.impl.commons.matches_QMARK_ = function(a, b) {
  a = cljs.core.re_find.call(null, a, b);
  return cljs.core.nth.call(null, a, 0, null) === b;
};
cljs.tools.reader.impl.commons.match_number = function(a) {
  return cljs.tools.reader.impl.commons.matches_QMARK_.call(null, cljs.tools.reader.impl.commons.int_pattern, a) ? cljs.tools.reader.impl.commons.match_int.call(null, a) : cljs.tools.reader.impl.commons.matches_QMARK_.call(null, cljs.tools.reader.impl.commons.float_pattern, a) ? cljs.tools.reader.impl.commons.match_float.call(null, a) : cljs.tools.reader.impl.commons.matches_QMARK_.call(null, cljs.tools.reader.impl.commons.ratio_pattern, a) ? cljs.tools.reader.impl.commons.match_ratio.call(null, 
  a) : null;
};
cljs.tools.reader.impl.commons.parse_symbol = function(a) {
  if ("" === a || !0 === /:$/.test(a) || !0 === /^::/.test(a)) {
    return null;
  }
  var b = a.indexOf("/"), c = 0 < b ? cljs.core.subs.call(null, a, 0, b) : null;
  if (null != c) {
    b += 1;
    if (b === cljs.core.count.call(null, a)) {
      return null;
    }
    a = cljs.core.subs.call(null, a, b);
    return cljs.tools.reader.impl.utils.numeric_QMARK_.call(null, cljs.core.nth.call(null, a, 0)) || "" === a || !1 !== /:$/.test(c) || "/" !== a && -1 !== a.indexOf("/") ? null : new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c, a], null);
  }
  return "/" === a || -1 === a.indexOf("/") ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, a], null) : null;
};
cljs.tools.reader.impl.commons.read_comment = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  return cljs.tools.reader.impl.commons.skip_line.call(null, a);
};
cljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = 1;
cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a);
  a = cljs.core.next.call(null, a);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.tools.reader.impl.commons.throwing_reader = function(a) {
  return function() {
    var b = function(b, c) {
      return cljs.tools.reader.impl.errors.reader_error.call(null, b, a);
    }, c = function(a, c) {
      var d = null;
      if (1 < arguments.length) {
        d = 0;
        for (var e = Array(arguments.length - 1); d < e.length;) {
          e[d] = arguments[d + 1], ++d;
        }
        d = new cljs.core.IndexedSeq(e, 0, null);
      }
      return b.call(this, a, d);
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a);
      a = cljs.core.rest(a);
      return b(c, a);
    };
    c.cljs$core$IFn$_invoke$arity$variadic = b;
    return c;
  }();
};
cljs.tools.reader.macro_terminating_QMARK_ = function(a) {
  switch(a) {
    case '"':
    case ";":
    case "@":
    case "^":
    case "`":
    case "~":
    case "(":
    case ")":
    case "[":
    case "]":
    case "{":
    case "}":
    case "\\":
      return !0;
    default:
      return !1;
  }
};
cljs.tools.reader.sb = new goog.string.StringBuffer;
cljs.tools.reader.read_token = function(a, b, c) {
  if (null == c) {
    return cljs.tools.reader.impl.errors.throw_eof_at_start.call(null, a, b);
  }
  cljs.tools.reader.sb.clear();
  for (b = c;;) {
    if (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b) || cljs.tools.reader.macro_terminating_QMARK_.call(null, b) || null == b) {
      return null != b && cljs.tools.reader.reader_types.unread.call(null, a, b), cljs.tools.reader.sb.toString();
    }
    cljs.tools.reader.sb.append(b);
    b = cljs.tools.reader.reader_types.read_char.call(null, a);
  }
};
cljs.tools.reader.read_dispatch = function(a, b, c, d) {
  var e = cljs.tools.reader.reader_types.read_char.call(null, a);
  return cljs.core.truth_(e) ? (b = cljs.tools.reader.dispatch_macros.call(null, e), cljs.core.truth_(b) ? b.call(null, a, e, c, d) : cljs.tools.reader.read_tagged.call(null, function() {
    cljs.tools.reader.reader_types.unread.call(null, a, e);
    return a;
  }(), e, c, d)) : cljs.tools.reader.impl.errors.throw_eof_at_dispatch.call(null, a);
};
cljs.tools.reader.read_unmatched_delimiter = function(a, b, c, d) {
  return cljs.tools.reader.impl.errors.throw_unmatch_delimiter.call(null, a, b);
};
cljs.tools.reader.read_regex = function(a, b, c, d) {
  b = new goog.string.StringBuffer;
  for (c = cljs.tools.reader.reader_types.read_char.call(null, a);;) {
    if ('"' === c) {
      return cljs.core.re_pattern.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
    }
    if (null == c) {
      return cljs.tools.reader.impl.errors.throw_eof_reading.call(null, a, new cljs.core.Keyword(null, "regex", "regex", 939488856), b);
    }
    b.append(c);
    "\\" === c && (c = cljs.tools.reader.reader_types.read_char.call(null, a), null == c && cljs.tools.reader.impl.errors.throw_eof_reading.call(null, a, new cljs.core.Keyword(null, "regex", "regex", 939488856), b), b.append(c));
    c = cljs.tools.reader.reader_types.read_char.call(null, a);
  }
};
cljs.tools.reader.read_unicode_char = function(a) {
  switch(arguments.length) {
    case 4:
      return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  c = b + c;
  cljs.core.count.call(null, a) !== c && cljs.tools.reader.impl.errors.throw_invalid_unicode_literal.call(null, null, a);
  for (var e = 0;;) {
    if (b === c) {
      return String.fromCharCode(e);
    }
    var f = cljs.tools.reader.impl.utils.char_code.call(null, cljs.core.nth.call(null, a, b), d);
    if (-1 === f) {
      return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token.call(null, null, cljs.core.nth.call(null, a, b), a);
    }
    e = f + e * d;
    b += 1;
  }
};
cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  for (var f = 1, g = cljs.tools.reader.impl.utils.char_code.call(null, b, c);;) {
    if (-1 === g) {
      return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null, a, b);
    }
    if (f !== d) {
      var h = cljs.tools.reader.reader_types.peek_char.call(null, a);
      if (cljs.core.truth_(function() {
        var a = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, h);
        if (a) {
          return a;
        }
        a = cljs.tools.reader.macros.call(null, h);
        return cljs.core.truth_(a) ? a : null == h;
      }())) {
        return cljs.core.truth_(e) ? cljs.tools.reader.impl.errors.throw_invalid_unicode_len.call(null, a, f, d) : String.fromCharCode(g);
      }
      var k = cljs.tools.reader.impl.utils.char_code.call(null, h, c);
      cljs.tools.reader.reader_types.read_char.call(null, a);
      if (-1 === k) {
        return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null, a, h);
      }
      g = k + g * c;
      f += 1;
    } else {
      return String.fromCharCode(g);
    }
  }
};
cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;
cljs.tools.reader.upper_limit = 55295;
cljs.tools.reader.lower_limit = 57344;
cljs.tools.reader.valid_octal_QMARK_ = function(a, b) {
  return 255 >= parseInt(a, b);
};
cljs.tools.reader.read_char_STAR_ = function(a, b, c, d) {
  b = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (null != b) {
    b = cljs.tools.reader.macro_terminating_QMARK_.call(null, b) || cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b) ? cljs.core.str.cljs$core$IFn$_invoke$arity$1(b) : cljs.tools.reader.read_token.call(null, a, new cljs.core.Keyword(null, "character", "character", 380652989), b);
    c = b.length;
    if (1 === c) {
      return b.charAt(0);
    }
    if (cljs.core._EQ_.call(null, b, "newline")) {
      return "\n";
    }
    if (cljs.core._EQ_.call(null, b, "space")) {
      return " ";
    }
    if (cljs.core._EQ_.call(null, b, "tab")) {
      return "\t";
    }
    if (cljs.core._EQ_.call(null, b, "backspace")) {
      return "\b";
    }
    if (cljs.core._EQ_.call(null, b, "formfeed")) {
      return "\f";
    }
    if (cljs.core._EQ_.call(null, b, "return")) {
      return "\r";
    }
    if (cljs.core.truth_(goog.string.startsWith(b, "u"))) {
      return b = cljs.tools.reader.read_unicode_char.call(null, b, 1, 4, 16), c = b.charCodeAt(0), c > cljs.tools.reader.upper_limit && c < cljs.tools.reader.lower_limit ? cljs.tools.reader.impl.errors.throw_invalid_character_literal.call(null, a, c.toString(16)) : b;
    }
    if (cljs.core.truth_(goog.string.startsWith(b, "o"))) {
      --c;
      if (3 < c) {
        return cljs.tools.reader.impl.errors.throw_invalid_octal_len.call(null, a, b);
      }
      c = cljs.tools.reader.read_unicode_char.call(null, b, 1, c, 8);
      return cljs.tools.reader.valid_octal_QMARK_.call(null, cljs.core.subs.call(null, b, 1), 8) ? c : cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null, a);
    }
    return cljs.tools.reader.impl.errors.throw_unsupported_character.call(null, a, b);
  }
  return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null, a);
};
cljs.tools.reader.starting_line_col_info = function(a) {
  return cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null, a), cljs.tools.reader.reader_types.get_column_number.call(null, a) - 1 | 0], null) : null;
};
cljs.tools.reader.ending_line_col_info = function(a) {
  return cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null, a), cljs.tools.reader.reader_types.get_column_number.call(null, a)], null) : null;
};
if ("undefined" === typeof cljs || "undefined" === typeof cljs.tools || "undefined" === typeof cljs.tools.reader || "undefined" === typeof cljs.tools.reader.READ_EOF) {
  cljs.tools.reader.READ_EOF = {};
}
if ("undefined" === typeof cljs || "undefined" === typeof cljs.tools || "undefined" === typeof cljs.tools.reader || "undefined" === typeof cljs.tools.reader.READ_FINISHED) {
  cljs.tools.reader.READ_FINISHED = {};
}
cljs.tools.reader._STAR_read_delim_STAR_ = !1;
cljs.tools.reader.read_delimited_internal = function(a, b, c, d, e) {
  var f = cljs.tools.reader.starting_line_col_info.call(null, c), g = cljs.core.nth.call(null, f, 0, null);
  f = cljs.core.nth.call(null, f, 1, null);
  b = cljs.tools.reader.impl.utils.char$.call(null, b);
  for (var h = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
    var k = cljs.tools.reader.read_STAR_.call(null, c, !1, cljs.tools.reader.READ_EOF, b, d, e);
    if (k === cljs.tools.reader.READ_FINISHED) {
      return cljs.core.persistent_BANG_.call(null, h);
    }
    if (k === cljs.tools.reader.READ_EOF) {
      return cljs.tools.reader.impl.errors.throw_eof_delimited.call(null, c, a, g, f, cljs.core.count.call(null, h));
    }
    h = cljs.core.conj_BANG_.call(null, h, k);
  }
};
cljs.tools.reader.read_delimited = function(a, b, c, d, e) {
  var f = cljs.tools.reader._STAR_read_delim_STAR_;
  cljs.tools.reader._STAR_read_delim_STAR_ = !0;
  try {
    return cljs.tools.reader.read_delimited_internal.call(null, a, b, c, d, e);
  } finally {
    cljs.tools.reader._STAR_read_delim_STAR_ = f;
  }
};
cljs.tools.reader.read_list = function(a, b, c, d) {
  var e = cljs.tools.reader.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  c = cljs.tools.reader.read_delimited.call(null, new cljs.core.Keyword(null, "list", "list", 765357683), ")", a, c, d);
  var f = cljs.tools.reader.ending_line_col_info.call(null, a);
  d = cljs.core.nth.call(null, f, 0, null);
  f = cljs.core.nth.call(null, f, 1, null);
  return cljs.core.with_meta.call(null, cljs.core.empty_QMARK_.call(null, c) ? cljs.core.List.EMPTY : cljs.core.apply.call(null, cljs.core.list, c), cljs.core.truth_(b) ? cljs.core.merge.call(null, function() {
    var b = cljs.tools.reader.reader_types.get_file_name.call(null, a);
    return cljs.core.truth_(b) ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "file", "file", -1269645878), b], null) : null;
  }(), new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), e, new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), d, new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), f], null)) : null);
};
cljs.tools.reader.read_vector = function(a, b, c, d) {
  var e = cljs.tools.reader.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  c = cljs.tools.reader.read_delimited.call(null, new cljs.core.Keyword(null, "vector", "vector", 1902966158), "]", a, c, d);
  var f = cljs.tools.reader.ending_line_col_info.call(null, a);
  d = cljs.core.nth.call(null, f, 0, null);
  f = cljs.core.nth.call(null, f, 1, null);
  return cljs.core.with_meta.call(null, c, cljs.core.truth_(b) ? cljs.core.merge.call(null, function() {
    var b = cljs.tools.reader.reader_types.get_file_name.call(null, a);
    return cljs.core.truth_(b) ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "file", "file", -1269645878), b], null) : null;
  }(), new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), e, new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), d, new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), f], null)) : null);
};
cljs.tools.reader.read_map = function(a, b, c, d) {
  var e = cljs.tools.reader.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  c = cljs.tools.reader.read_delimited.call(null, new cljs.core.Keyword(null, "map", "map", 1371690461), "}", a, c, d);
  d = cljs.core.count.call(null, c);
  var f = cljs.core.take_nth.call(null, 2, c), g = cljs.core.set.call(null, f), h = cljs.tools.reader.ending_line_col_info.call(null, a), k = cljs.core.nth.call(null, h, 0, null);
  h = cljs.core.nth.call(null, h, 1, null);
  cljs.core.odd_QMARK_.call(null, d) && cljs.tools.reader.impl.errors.throw_odd_map.call(null, a, b, e, c);
  cljs.core._EQ_.call(null, cljs.core.count.call(null, g), cljs.core.count.call(null, f)) || cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "map", "map", 1371690461), f);
  return cljs.core.with_meta.call(null, d <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array.call(null, c), !0, !0) : cljs.core.PersistentHashMap.fromArray(cljs.core.to_array.call(null, c), !0), cljs.core.truth_(b) ? cljs.core.merge.call(null, function() {
    var b = cljs.tools.reader.reader_types.get_file_name.call(null, a);
    return cljs.core.truth_(b) ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "file", "file", -1269645878), b], null) : null;
  }(), new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), e, new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), k, new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), h], null)) : null);
};
cljs.tools.reader.read_number = function(a, b) {
  for (var c = function() {
    var a = new goog.string.StringBuffer;
    a.append(b);
    return a;
  }(), d = cljs.tools.reader.reader_types.read_char.call(null, a);;) {
    if (cljs.core.truth_(function() {
      var a = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, d);
      if (a) {
        return a;
      }
      a = cljs.tools.reader.macros.call(null, d);
      return cljs.core.truth_(a) ? a : null == d;
    }())) {
      var e = cljs.core.str.cljs$core$IFn$_invoke$arity$1(c);
      cljs.tools.reader.reader_types.unread.call(null, a, d);
      var f = cljs.tools.reader.impl.commons.match_number.call(null, e);
      return cljs.core.truth_(f) ? f : cljs.tools.reader.impl.errors.throw_invalid_number.call(null, a, e);
    }
    e = function() {
      var a = c;
      a.append(d);
      return a;
    }();
    f = cljs.tools.reader.reader_types.read_char.call(null, a);
    c = e;
    d = f;
  }
};
cljs.tools.reader.escape_char = function(a, b) {
  a = cljs.tools.reader.reader_types.read_char.call(null, b);
  switch(a) {
    case "t":
      return "\t";
    case "r":
      return "\r";
    case "n":
      return "\n";
    case "\\":
      return "\\";
    case '"':
      return '"';
    case "b":
      return "\b";
    case "f":
      return "\f";
    case "u":
      return a = cljs.tools.reader.reader_types.read_char.call(null, b), -1 === parseInt(a | 0, 16) ? cljs.tools.reader.impl.errors.throw_invalid_unicode_escape.call(null, b, a) : cljs.tools.reader.read_unicode_char.call(null, b, a, 16, 4, !0);
    default:
      return cljs.tools.reader.impl.utils.numeric_QMARK_.call(null, a) ? (a = cljs.tools.reader.read_unicode_char.call(null, b, a, 8, 3, !1), 255 < (a | 0) ? cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null, b) : a) : cljs.tools.reader.impl.errors.throw_bad_escape_char.call(null, b, a);
  }
};
cljs.tools.reader.read_string_STAR_ = function(a, b, c, d) {
  for (var e = new goog.string.StringBuffer, f = cljs.tools.reader.reader_types.read_char.call(null, a);;) {
    if (null == f) {
      return cljs.tools.reader.impl.errors.throw_eof_reading.call(null, a, new cljs.core.Keyword(null, "string", "string", -1989541586), '"', e);
    }
    switch(f) {
      case "\\":
        b = function() {
          var b = e;
          b.append(cljs.tools.reader.escape_char.call(null, e, a));
          return b;
        }();
        c = cljs.tools.reader.reader_types.read_char.call(null, a);
        e = b;
        f = c;
        continue;
      case '"':
        return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
      default:
        b = function() {
          var a = e;
          a.append(f);
          return a;
        }(), c = cljs.tools.reader.reader_types.read_char.call(null, a), e = b, f = c;
    }
  }
};
cljs.tools.reader.loc_info = function(a, b, c) {
  if (null == b) {
    return null;
  }
  var d = cljs.tools.reader.reader_types.get_file_name.call(null, a);
  d = null == d ? null : new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "file", "file", -1269645878), d], null);
  var e = cljs.tools.reader.ending_line_col_info.call(null, a);
  a = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  b = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), c, new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), a, new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), e], null);
  return cljs.core.merge.call(null, d, b);
};
cljs.tools.reader.read_symbol = function(a, b) {
  var c = cljs.tools.reader.starting_line_col_info.call(null, a), d = cljs.core.nth.call(null, c, 0, null);
  c = cljs.core.nth.call(null, c, 1, null);
  b = cljs.tools.reader.read_token.call(null, a, new cljs.core.Keyword(null, "symbol", "symbol", -1038572696), b);
  if (null == b) {
    return null;
  }
  switch(b) {
    case "nil":
      return null;
    case "true":
      return !0;
    case "false":
      return !1;
    case "/":
      return new cljs.core.Symbol(null, "/", "/", -1371932971, null);
    default:
      var e = cljs.tools.reader.impl.commons.parse_symbol.call(null, b);
      return null != e ? (b = cljs.core.symbol.call(null, cljs.core._nth.call(null, e, 0), cljs.core._nth.call(null, e, 1)), cljs.core._with_meta.call(null, b, cljs.tools.reader.loc_info.call(null, a, d, c))) : cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "symbol", "symbol", -1038572696), b);
  }
};
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_alias = function(a) {
  return cljs.core.get.call(null, cljs.tools.reader._STAR_alias_map_STAR_, a);
};
cljs.tools.reader.resolve_ns = function(a) {
  var b = cljs.tools.reader.resolve_alias.call(null, a);
  if (cljs.core.truth_(b)) {
    return b;
  }
  a = cljs.core.find_ns.call(null, a);
  return cljs.core.truth_(a) ? cljs.core.symbol.call(null, cljs.core.ns_name.call(null, a)) : null;
};
cljs.tools.reader.read_keyword = function(a, b, c, d) {
  b = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b)) {
    return cljs.tools.reader.impl.errors.throw_single_colon.call(null, a);
  }
  b = cljs.tools.reader.read_token.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), b);
  d = cljs.tools.reader.impl.commons.parse_symbol.call(null, b);
  if (null != d) {
    c = cljs.core._nth.call(null, d, 0);
    d = cljs.core._nth.call(null, d, 1);
    if (":" === b.charAt(0)) {
      if (null != c) {
        return c = cljs.tools.reader.resolve_alias.call(null, cljs.core.symbol.call(null, cljs.core.subs.call(null, c, 1))), cljs.core.truth_(c) ? cljs.core.keyword.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), d) : cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"), cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
      }
      c = cljs.core._STAR_ns_STAR_;
      return cljs.core.truth_(c) ? cljs.core.keyword.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(c), cljs.core.subs.call(null, d, 1)) : cljs.tools.reader.impl.errors.reader_error.call(null, a, "Invalid token: :", b);
    }
    return cljs.core.keyword.call(null, c, d);
  }
  return cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"), cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.tools.reader.wrapping_reader = function(a) {
  return function(b, c, d, e) {
    return new cljs.core.List(null, a, new cljs.core.List(null, cljs.tools.reader.read_STAR_.call(null, b, !0, null, d, e), null, 1, null), 2, null);
  };
};
cljs.tools.reader.read_meta = function(a, b, c, d) {
  if (cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null, a) && !cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, cljs.tools.reader.reader_types.peek_char.call(null, a))) {
    return cljs.tools.reader.reader_types.log_source_STAR_.call(null, a, function() {
      var b = cljs.tools.reader.starting_line_col_info.call(null, a), e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null), g = cljs.tools.reader.impl.utils.desugar_meta.call(null, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d));
      cljs.core.map_QMARK_.call(null, g) || cljs.tools.reader.impl.errors.throw_bad_metadata.call(null, a, g);
      b = cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
      return null != b && (b.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$IMeta$) ? (e = cljs.core.truth_(cljs.core.truth_(e) ? cljs.core.seq_QMARK_.call(null, b) : e) ? cljs.core.assoc.call(null, g, new cljs.core.Keyword(null, "line", "line", 212345235), e, new cljs.core.Keyword(null, "column", "column", 2078222095), f) : g, null != b && (b.cljs$lang$protocol_mask$partition0$ & 262144 || cljs.core.PROTOCOL_SENTINEL === b.cljs$core$IWithMeta$) ? cljs.core.with_meta.call(null, 
      b, cljs.core.merge.call(null, cljs.core.meta.call(null, b), e)) : cljs.core.reset_meta_BANG_.call(null, b, e)) : cljs.tools.reader.impl.errors.throw_bad_metadata_target.call(null, a, b);
    });
  }
  var e = cljs.tools.reader.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, e, 0, null);
  var f = cljs.core.nth.call(null, e, 1, null), g = cljs.tools.reader.impl.utils.desugar_meta.call(null, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d));
  cljs.core.map_QMARK_.call(null, g) || cljs.tools.reader.impl.errors.throw_bad_metadata.call(null, a, g);
  e = cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
  return null != e && (e.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === e.cljs$core$IMeta$) ? (b = cljs.core.truth_(cljs.core.truth_(b) ? cljs.core.seq_QMARK_.call(null, e) : b) ? cljs.core.assoc.call(null, g, new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), f) : g, null != e && (e.cljs$lang$protocol_mask$partition0$ & 262144 || cljs.core.PROTOCOL_SENTINEL === e.cljs$core$IWithMeta$) ? cljs.core.with_meta.call(null, 
  e, cljs.core.merge.call(null, cljs.core.meta.call(null, e), b)) : cljs.core.reset_meta_BANG_.call(null, e, b)) : cljs.tools.reader.impl.errors.throw_bad_metadata_target.call(null, a, e);
};
cljs.tools.reader.read_set = function(a, b, c, d) {
  var e = cljs.tools.reader.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  e = cljs.core.truth_(e) ? e - 1 | 0 : null;
  c = cljs.tools.reader.read_delimited.call(null, new cljs.core.Keyword(null, "set", "set", 304602554), "}", a, c, d);
  d = cljs.core.set.call(null, c);
  var f = cljs.tools.reader.ending_line_col_info.call(null, a), g = cljs.core.nth.call(null, f, 0, null);
  f = cljs.core.nth.call(null, f, 1, null);
  cljs.core._EQ_.call(null, cljs.core.count.call(null, c), cljs.core.count.call(null, d)) || cljs.tools.reader.impl.errors.reader_error.call(null, a, cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "set", "set", 304602554), c));
  return cljs.core.with_meta.call(null, d, cljs.core.truth_(b) ? cljs.core.merge.call(null, function() {
    var b = cljs.tools.reader.reader_types.get_file_name.call(null, a);
    return cljs.core.truth_(b) ? new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "file", "file", -1269645878), b], null) : null;
  }(), new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "line", "line", 212345235), b, new cljs.core.Keyword(null, "column", "column", 2078222095), e, new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), g, new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), f], null)) : null);
};
cljs.tools.reader.read_discard = function(a, b, c, d) {
  cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
  return a;
};
cljs.tools.reader.read_symbolic_value = function(a, b, c, d) {
  b = cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
  return cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "NaN", "NaN", 666918153, null), b) ? Number.NaN : cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "-Inf", "-Inf", -2123243689, null), b) ? Number.NEGATIVE_INFINITY : cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "Inf", "Inf", 647172781, null), b) ? Number.POSITIVE_INFINITY : cljs.tools.reader.impl.errors.reader_error.call(null, a, ["Invalid token: ##", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "else", "else", -1508377146), null, new cljs.core.Keyword(null, "none", "none", 1333468478), null], null), null);
cljs.tools.reader.has_feature_QMARK_ = function(a, b, c) {
  return b instanceof cljs.core.Keyword ? cljs.core._EQ_.call(null, new cljs.core.Keyword(null, "default", "default", -1987822328), b) || cljs.core.contains_QMARK_.call(null, cljs.core.get.call(null, c, new cljs.core.Keyword(null, "features", "features", -1146962336)), b) : cljs.tools.reader.impl.errors.reader_error.call(null, a, "Feature should be a keyword: ", b);
};
cljs.tools.reader.check_eof_error = function(a, b, c) {
  return a === cljs.tools.reader.READ_EOF ? cljs.tools.reader.impl.errors.throw_eof_error.call(null, b, function() {
    var a = 0 > c;
    return a ? c : a;
  }()) : null;
};
cljs.tools.reader.check_reserved_features = function(a, b) {
  return cljs.core.truth_(cljs.core.get.call(null, cljs.tools.reader.RESERVED_FEATURES, b)) ? cljs.tools.reader.impl.errors.reader_error.call(null, a, "Feature name ", b, " is reserved") : null;
};
cljs.tools.reader.check_invalid_read_cond = function(a, b, c) {
  return a === cljs.tools.reader.READ_FINISHED ? 0 > c ? cljs.tools.reader.impl.errors.reader_error.call(null, b, "read-cond requires an even number of forms") : cljs.tools.reader.impl.errors.reader_error.call(null, b, "read-cond starting on line ", c, " requires an even number of forms") : null;
};
cljs.tools.reader.read_suppress = function(a, b, c, d) {
  var e = cljs.tools.reader._STAR_suppress_read_STAR_;
  cljs.tools.reader._STAR_suppress_read_STAR_ = !0;
  try {
    var f = cljs.tools.reader.read_STAR_.call(null, b, !1, cljs.tools.reader.READ_EOF, ")", c, d);
    cljs.tools.reader.check_eof_error.call(null, f, b, a);
    return f === cljs.tools.reader.READ_FINISHED ? cljs.tools.reader.READ_FINISHED : null;
  } finally {
    cljs.tools.reader._STAR_suppress_read_STAR_ = e;
  }
};
if ("undefined" === typeof cljs || "undefined" === typeof cljs.tools || "undefined" === typeof cljs.tools.reader || "undefined" === typeof cljs.tools.reader.NO_MATCH) {
  cljs.tools.reader.NO_MATCH = {};
}
cljs.tools.reader.match_feature = function(a, b, c, d) {
  var e = cljs.tools.reader.read_STAR_.call(null, b, !1, cljs.tools.reader.READ_EOF, ")", c, d);
  cljs.tools.reader.check_eof_error.call(null, e, b, a);
  if (cljs.core._EQ_.call(null, e, cljs.tools.reader.READ_FINISHED)) {
    return cljs.tools.reader.READ_FINISHED;
  }
  cljs.tools.reader.check_reserved_features.call(null, b, e);
  if (cljs.core.truth_(cljs.tools.reader.has_feature_QMARK_.call(null, b, e, c))) {
    return c = cljs.tools.reader.read_STAR_.call(null, b, !1, cljs.tools.reader.READ_EOF, ")", c, d), cljs.tools.reader.check_eof_error.call(null, c, b, a), cljs.tools.reader.check_invalid_read_cond.call(null, c, b, a), c;
  }
  a = cljs.tools.reader.read_suppress.call(null, a, b, c, d);
  return cljs.core.truth_(a) ? a : cljs.tools.reader.NO_MATCH;
};
cljs.tools.reader.read_cond_delimited = function(a, b, c, d) {
  var e = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? cljs.tools.reader.reader_types.get_line_number.call(null, a) : -1;
  a: {
    for (var f = cljs.tools.reader.NO_MATCH, g = null;;) {
      if (f === cljs.tools.reader.NO_MATCH) {
        if (f = cljs.tools.reader.match_feature.call(null, e, a, c, d), f === cljs.tools.reader.READ_FINISHED) {
          c = cljs.tools.reader.READ_FINISHED;
          break a;
        } else {
          g = null;
        }
      } else {
        if (g !== cljs.tools.reader.READ_FINISHED) {
          g = cljs.tools.reader.read_suppress.call(null, e, a, c, d);
        } else {
          c = f;
          break a;
        }
      }
    }
  }
  return c === cljs.tools.reader.READ_FINISHED ? a : cljs.core.truth_(b) ? null != c && (c.cljs$lang$protocol_mask$partition0$ & 16777216 || cljs.core.PROTOCOL_SENTINEL === c.cljs$core$ISequential$) ? (goog.array.insertArrayAt(d, cljs.core.to_array.call(null, c), 0), a) : cljs.tools.reader.impl.errors.reader_error.call(null, a, "Spliced form list in read-cond-splicing must implement ISequential") : c;
};
cljs.tools.reader.read_cond = function(a, b, c, d) {
  if (cljs.core.not.call(null, cljs.core.truth_(c) ? (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "preserve", "preserve", 1276846509), null, new cljs.core.Keyword(null, "allow", "allow", -1857325745), null], null), null)).call(null, (new cljs.core.Keyword(null, "read-cond", "read-cond", 1056899244)).cljs$core$IFn$_invoke$arity$1(c)) : c)) {
    throw cljs.core.ex_info.call(null, "Conditional read not allowed", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "runtime-exception", "runtime-exception", -1495664514)], null));
  }
  var e = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (cljs.core.truth_(e)) {
    if (e = (b = cljs.core._EQ_.call(null, e, "@")) ? cljs.tools.reader.reader_types.read_char.call(null, a) : e, b && (cljs.tools.reader._STAR_read_delim_STAR_ || cljs.tools.reader.impl.errors.reader_error.call(null, a, "cond-splice not in list")), e = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, e) ? cljs.tools.reader.impl.commons.read_past.call(null, cljs.tools.reader.impl.utils.whitespace_QMARK_, a) : e, cljs.core.truth_(e)) {
      if (cljs.core.not_EQ_.call(null, e, "(")) {
        throw cljs.core.ex_info.call(null, "read-cond body must be a list", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "runtime-exception", "runtime-exception", -1495664514)], null));
      }
      var f = cljs.tools.reader._STAR_suppress_read_STAR_;
      var g = cljs.tools.reader._STAR_suppress_read_STAR_;
      g = cljs.core.truth_(g) ? g : cljs.core._EQ_.call(null, new cljs.core.Keyword(null, "preserve", "preserve", 1276846509), (new cljs.core.Keyword(null, "read-cond", "read-cond", 1056899244)).cljs$core$IFn$_invoke$arity$1(c));
      cljs.tools.reader._STAR_suppress_read_STAR_ = g;
      try {
        return cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_) ? cljs.tools.reader.impl.utils.reader_conditional.call(null, cljs.tools.reader.read_list.call(null, a, e, c, d), b) : cljs.tools.reader.read_cond_delimited.call(null, a, b, c, d);
      } finally {
        cljs.tools.reader._STAR_suppress_read_STAR_ = f;
      }
    } else {
      return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null, a);
    }
  } else {
    return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null, a);
  }
};
cljs.tools.reader.arg_env = null;
cljs.tools.reader.garg = function(a) {
  return cljs.core.symbol.call(null, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(-1 === a ? "rest" : ["p", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join("")), "__", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id.call(null)), "#"].join(""));
};
cljs.tools.reader.read_fn = function(a, b, c, d) {
  if (cljs.core.truth_(cljs.tools.reader.arg_env)) {
    throw cljs.core.ex_info.call(null, "Nested #()s are not allowed", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "illegal-state", "illegal-state", -1519851182)], null));
  }
  b = cljs.tools.reader.arg_env;
  var e = cljs.core.sorted_map.call(null);
  cljs.tools.reader.arg_env = e;
  try {
    var f = cljs.tools.reader.read_STAR_.call(null, function() {
      cljs.tools.reader.reader_types.unread.call(null, a, "(");
      return a;
    }(), !0, null, c, d), g = cljs.core.rseq.call(null, cljs.tools.reader.arg_env), h = g ? function() {
      var a = cljs.core.key.call(null, cljs.core.first.call(null, g)), b = function() {
        for (var b = 1, c = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
          if (b > a) {
            return cljs.core.persistent_BANG_.call(null, c);
          }
          var d = b + 1;
          c = cljs.core.conj_BANG_.call(null, c, function() {
            var a = cljs.core.get.call(null, cljs.tools.reader.arg_env, b);
            return cljs.core.truth_(a) ? a : cljs.tools.reader.garg.call(null, b);
          }());
          b = d;
        }
      }();
      return cljs.core.truth_(cljs.tools.reader.arg_env.call(null, -1)) ? cljs.core.conj.call(null, b, new cljs.core.Symbol(null, "\x26", "\x26", -2144855648, null), cljs.tools.reader.arg_env.call(null, -1)) : b;
    }() : cljs.core.PersistentVector.EMPTY;
    return new cljs.core.List(null, new cljs.core.Symbol(null, "fn*", "fn*", -752876845, null), new cljs.core.List(null, h, new cljs.core.List(null, f, null, 1, null), 2, null), 3, null);
  } finally {
    cljs.tools.reader.arg_env = b;
  }
};
cljs.tools.reader.register_arg = function(a) {
  if (cljs.core.truth_(cljs.tools.reader.arg_env)) {
    var b = cljs.tools.reader.arg_env.call(null, a);
    if (cljs.core.truth_(b)) {
      return b;
    }
    b = cljs.tools.reader.garg.call(null, a);
    cljs.tools.reader.arg_env = cljs.core.assoc.call(null, cljs.tools.reader.arg_env, a, b);
    return b;
  }
  throw cljs.core.ex_info.call(null, "Arg literal not in #()", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "illegal-state", "illegal-state", -1519851182)], null));
};
cljs.tools.reader.read_arg = function(a, b, c, d) {
  if (null == cljs.tools.reader.arg_env) {
    return cljs.tools.reader.read_symbol.call(null, a, b);
  }
  b = cljs.tools.reader.reader_types.peek_char.call(null, a);
  if (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b) || cljs.tools.reader.macro_terminating_QMARK_.call(null, b) || null == b) {
    return cljs.tools.reader.register_arg.call(null, 1);
  }
  if (cljs.core._EQ_.call(null, b, "\x26")) {
    return cljs.tools.reader.reader_types.read_char.call(null, a), cljs.tools.reader.register_arg.call(null, -1);
  }
  a = cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
  if (cljs.core.integer_QMARK_.call(null, a)) {
    return cljs.tools.reader.register_arg.call(null, a);
  }
  throw cljs.core.ex_info.call(null, "Arg literal must be %, %\x26 or %integer", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "illegal-state", "illegal-state", -1519851182)], null));
};
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = function(a, b, c, d) {
  b = cljs.tools.reader.reader_types.peek_char.call(null, a);
  return cljs.core.truth_(b) ? cljs.core._EQ_.call(null, "@", b) ? cljs.tools.reader.wrapping_reader.call(null, new cljs.core.Symbol("clojure.core", "unquote-splicing", "clojure.core/unquote-splicing", -552003150, null)).call(null, function() {
    cljs.tools.reader.reader_types.read_char.call(null, a);
    return a;
  }(), "@", c, d) : cljs.tools.reader.wrapping_reader.call(null, new cljs.core.Symbol("clojure.core", "unquote", "clojure.core/unquote", 843087510, null)).call(null, a, "~", c, d) : null;
};
cljs.tools.reader.unquote_splicing_QMARK_ = function(a) {
  return cljs.core.seq_QMARK_.call(null, a) && cljs.core._EQ_.call(null, cljs.core.first.call(null, a), new cljs.core.Symbol("clojure.core", "unquote-splicing", "clojure.core/unquote-splicing", -552003150, null));
};
cljs.tools.reader.unquote_QMARK_ = function(a) {
  return cljs.core.seq_QMARK_.call(null, a) && cljs.core._EQ_.call(null, cljs.core.first.call(null, a), new cljs.core.Symbol("clojure.core", "unquote", "clojure.core/unquote", 843087510, null));
};
cljs.tools.reader.expand_list = function(a) {
  a = cljs.core.seq.call(null, a);
  for (var b = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
    if (a) {
      var c = cljs.core.first.call(null, a);
      b = cljs.core.conj_BANG_.call(null, b, cljs.tools.reader.unquote_QMARK_.call(null, c) ? new cljs.core.List(null, new cljs.core.Symbol("clojure.core", "list", "clojure.core/list", -1119203325, null), new cljs.core.List(null, cljs.core.second.call(null, c), null, 1, null), 2, null) : cljs.tools.reader.unquote_splicing_QMARK_.call(null, c) ? cljs.core.second.call(null, c) : new cljs.core.List(null, new cljs.core.Symbol("clojure.core", "list", "clojure.core/list", -1119203325, null), new cljs.core.List(null, 
      cljs.tools.reader.syntax_quote_STAR_.call(null, c), null, 1, null), 2, null));
      a = cljs.core.next.call(null, a);
    } else {
      return cljs.core.seq.call(null, cljs.core.persistent_BANG_.call(null, b));
    }
  }
};
cljs.tools.reader.flatten_map = function(a) {
  a = cljs.core.seq.call(null, a);
  for (var b = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
    if (a) {
      var c = cljs.core.first.call(null, a);
      a = cljs.core.next.call(null, a);
      b = cljs.core.conj_BANG_.call(null, cljs.core.conj_BANG_.call(null, b, cljs.core.key.call(null, c)), cljs.core.val.call(null, c));
    } else {
      return cljs.core.seq.call(null, cljs.core.persistent_BANG_.call(null, b));
    }
  }
};
cljs.tools.reader.register_gensym = function(a) {
  if (cljs.core.not.call(null, cljs.tools.reader.gensym_env)) {
    throw cljs.core.ex_info.call(null, "Gensym literal not in syntax-quote", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "illegal-state", "illegal-state", -1519851182)], null));
  }
  var b = cljs.core.get.call(null, cljs.tools.reader.gensym_env, a);
  if (cljs.core.truth_(b)) {
    return b;
  }
  b = cljs.core.symbol.call(null, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null, cljs.core.name.call(null, a), 0, cljs.core.count.call(null, cljs.core.name.call(null, a)) - 1)), "__", cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id.call(null)), "__auto__"].join(""));
  cljs.tools.reader.gensym_env = cljs.core.assoc.call(null, cljs.tools.reader.gensym_env, a, b);
  return b;
};
cljs.tools.reader.add_meta = function(a, b) {
  var c = (c = null != a ? a.cljs$lang$protocol_mask$partition0$ & 262144 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IWithMeta$ ? !0 : !1 : !1) ? cljs.core.seq.call(null, cljs.core.dissoc.call(null, cljs.core.meta.call(null, a), new cljs.core.Keyword(null, "line", "line", 212345235), new cljs.core.Keyword(null, "column", "column", 2078222095), new cljs.core.Keyword(null, "end-line", "end-line", 1837326455), new cljs.core.Keyword(null, "end-column", "end-column", 1425389514), new cljs.core.Keyword(null, 
  "file", "file", -1269645878), new cljs.core.Keyword(null, "source", "source", -433931539))) : c;
  return c ? new cljs.core.List(null, new cljs.core.Symbol("cljs.core", "with-meta", "cljs.core/with-meta", 749126446, null), new cljs.core.List(null, b, new cljs.core.List(null, cljs.tools.reader.syntax_quote_STAR_.call(null, cljs.core.meta.call(null, a)), null, 1, null), 2, null), 3, null) : b;
};
cljs.tools.reader.syntax_quote_coll = function(a, b) {
  b = new cljs.core.List(null, new cljs.core.Symbol("cljs.core", "sequence", "cljs.core/sequence", 1908459032, null), new cljs.core.List(null, cljs.core.cons.call(null, new cljs.core.Symbol("cljs.core", "concat", "cljs.core/concat", -1133584918, null), cljs.tools.reader.expand_list.call(null, b)), null, 1, null), 2, null);
  return cljs.core.truth_(a) ? new cljs.core.List(null, new cljs.core.Symbol("cljs.core", "apply", "cljs.core/apply", 1757277831, null), new cljs.core.List(null, a, new cljs.core.List(null, b, null, 1, null), 2, null), 3, null) : b;
};
cljs.tools.reader.map_func = function(a) {
  return 16 <= cljs.core.count.call(null, a) ? new cljs.core.Symbol("cljs.core", "hash-map", "cljs.core/hash-map", 303385767, null) : new cljs.core.Symbol("cljs.core", "array-map", "cljs.core/array-map", -1519210683, null);
};
cljs.tools.reader.bool_QMARK_ = function(a) {
  return a instanceof Boolean || !0 === a || !1 === a;
};
cljs.tools.reader.resolve_symbol = function(a) {
  throw cljs.core.ex_info.call(null, "resolve-symbol is not implemented", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "sym", "sym", -1444860305), a], null));
};
cljs.tools.reader.syntax_quote_STAR_ = function(a) {
  return cljs.tools.reader.add_meta.call(null, a, cljs.core.special_symbol_QMARK_.call(null, a) ? new cljs.core.List(null, new cljs.core.Symbol(null, "quote", "quote", 1377916282, null), new cljs.core.List(null, a, null, 1, null), 2, null) : a instanceof cljs.core.Symbol ? new cljs.core.List(null, new cljs.core.Symbol(null, "quote", "quote", 1377916282, null), new cljs.core.List(null, cljs.core.truth_(function() {
    var b = cljs.core.not.call(null, cljs.core.namespace.call(null, a));
    return b ? goog.string.endsWith(cljs.core.name.call(null, a), "#") : b;
  }()) ? cljs.tools.reader.register_gensym.call(null, a) : function() {
    var b = cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
    return cljs.core.truth_(goog.string.endsWith(b, ".")) ? (b = cljs.core.symbol.call(null, cljs.core.subs.call(null, b, 0, cljs.core.count.call(null, b) - 1)), cljs.core.symbol.call(null, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.resolve_symbol.call(null, b)), "."].join(""))) : cljs.tools.reader.resolve_symbol.call(null, a);
  }(), null, 1, null), 2, null) : cljs.tools.reader.unquote_QMARK_.call(null, a) ? cljs.core.second.call(null, a) : cljs.tools.reader.unquote_splicing_QMARK_.call(null, a) ? function() {
    throw cljs.core.ex_info.call(null, "unquote-splice not in list", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "illegal-state", "illegal-state", -1519851182)], null));
  }() : cljs.core.coll_QMARK_.call(null, a) ? null != a && (a.cljs$lang$protocol_mask$partition0$ & 67108864 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IRecord$) ? a : cljs.core.map_QMARK_.call(null, a) ? cljs.tools.reader.syntax_quote_coll.call(null, cljs.tools.reader.map_func.call(null, a), cljs.tools.reader.flatten_map.call(null, a)) : cljs.core.vector_QMARK_.call(null, a) ? new cljs.core.List(null, new cljs.core.Symbol("cljs.core", "vec", "cljs.core/vec", 307622519, null), new cljs.core.List(null, 
  cljs.tools.reader.syntax_quote_coll.call(null, null, a), null, 1, null), 2, null) : cljs.core.set_QMARK_.call(null, a) ? cljs.tools.reader.syntax_quote_coll.call(null, new cljs.core.Symbol("cljs.core", "hash-set", "cljs.core/hash-set", 1130426749, null), a) : cljs.core.seq_QMARK_.call(null, a) || cljs.core.list_QMARK_.call(null, a) ? function() {
    var b = cljs.core.seq.call(null, a);
    return b ? cljs.tools.reader.syntax_quote_coll.call(null, null, b) : cljs.core.list(new cljs.core.Symbol("cljs.core", "list", "cljs.core/list", -1331406371, null));
  }() : function() {
    throw cljs.core.ex_info.call(null, "Unknown Collection type", new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "unsupported-operation", "unsupported-operation", 1890540953)], null));
  }() : a instanceof cljs.core.Keyword || "number" === typeof a || "string" === typeof a || null == a || cljs.tools.reader.bool_QMARK_.call(null, a) || a instanceof RegExp ? a : new cljs.core.List(null, new cljs.core.Symbol(null, "quote", "quote", 1377916282, null), new cljs.core.List(null, a, null, 1, null), 2, null));
};
cljs.tools.reader.read_syntax_quote = function(a, b, c, d) {
  b = cljs.tools.reader.gensym_env;
  cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;
  try {
    return cljs.tools.reader.syntax_quote_STAR_.call(null, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d));
  } finally {
    cljs.tools.reader.gensym_env = b;
  }
};
cljs.tools.reader.read_namespaced_map = function(a, b, c, d) {
  var e = cljs.tools.reader.read_token.call(null, a, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), cljs.tools.reader.reader_types.read_char.call(null, a));
  b = cljs.core._EQ_.call(null, e, ":") ? cljs.core.ns_name.call(null, cljs.core._STAR_ns_STAR_) : cljs.core._EQ_.call(null, ":", cljs.core.first.call(null, e)) ? function() {
    var a = null == e ? null : cljs.core.subs.call(null, e, 1);
    a = null == a ? null : cljs.tools.reader.impl.commons.parse_symbol.call(null, a);
    a = null == a ? null : cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null, a);
    a = null == a ? null : cljs.core.symbol.call(null, a);
    return null == a ? null : cljs.tools.reader.resolve_ns.call(null, a);
  }() : function() {
    var a = null == e ? null : cljs.tools.reader.impl.commons.parse_symbol.call(null, e);
    return null == a ? null : cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null, a);
  }();
  return cljs.core.truth_(b) ? "{" === cljs.tools.reader.impl.commons.read_past.call(null, cljs.tools.reader.impl.utils.whitespace_QMARK_, a) ? (c = cljs.tools.reader.read_delimited.call(null, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), "}", a, c, d), cljs.core.odd_QMARK_.call(null, cljs.core.count.call(null, c)) && cljs.tools.reader.impl.errors.throw_odd_map.call(null, a, null, null, c), d = cljs.tools.reader.impl.utils.namespace_keys.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), 
  cljs.core.take_nth.call(null, 2, c)), c = cljs.core.take_nth.call(null, 2, cljs.core.rest.call(null, c)), cljs.core._EQ_.call(null, cljs.core.count.call(null, cljs.core.set.call(null, d)), cljs.core.count.call(null, d)) || cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), d), cljs.core.zipmap.call(null, d, c)) : cljs.tools.reader.impl.errors.throw_ns_map_no_map.call(null, a, e) : cljs.tools.reader.impl.errors.throw_bad_ns.call(null, 
  a, e);
};
cljs.tools.reader.macros = function(a) {
  switch(a) {
    case '"':
      return cljs.tools.reader.read_string_STAR_;
    case ":":
      return cljs.tools.reader.read_keyword;
    case ";":
      return cljs.tools.reader.impl.commons.read_comment;
    case "'":
      return cljs.tools.reader.wrapping_reader.call(null, new cljs.core.Symbol(null, "quote", "quote", 1377916282, null));
    case "@":
      return cljs.tools.reader.wrapping_reader.call(null, new cljs.core.Symbol("clojure.core", "deref", "clojure.core/deref", 188719157, null));
    case "^":
      return cljs.tools.reader.read_meta;
    case "`":
      return cljs.tools.reader.read_syntax_quote;
    case "~":
      return cljs.tools.reader.read_unquote;
    case "(":
      return cljs.tools.reader.read_list;
    case ")":
      return cljs.tools.reader.read_unmatched_delimiter;
    case "[":
      return cljs.tools.reader.read_vector;
    case "]":
      return cljs.tools.reader.read_unmatched_delimiter;
    case "{":
      return cljs.tools.reader.read_map;
    case "}":
      return cljs.tools.reader.read_unmatched_delimiter;
    case "\\":
      return cljs.tools.reader.read_char_STAR_;
    case "%":
      return cljs.tools.reader.read_arg;
    case "#":
      return cljs.tools.reader.read_dispatch;
    default:
      return null;
  }
};
cljs.tools.reader.dispatch_macros = function(a) {
  switch(a) {
    case "^":
      return cljs.tools.reader.read_meta;
    case "'":
      return cljs.tools.reader.wrapping_reader.call(null, new cljs.core.Symbol(null, "var", "var", 870848730, null));
    case "(":
      return cljs.tools.reader.read_fn;
    case "{":
      return cljs.tools.reader.read_set;
    case "\x3c":
      return cljs.tools.reader.impl.commons.throwing_reader.call(null, "Unreadable form");
    case "\x3d":
      return cljs.tools.reader.impl.commons.throwing_reader.call(null, "read-eval not supported");
    case '"':
      return cljs.tools.reader.read_regex;
    case "!":
      return cljs.tools.reader.impl.commons.read_comment;
    case "_":
      return cljs.tools.reader.read_discard;
    case "?":
      return cljs.tools.reader.read_cond;
    case ":":
      return cljs.tools.reader.read_namespaced_map;
    case "#":
      return cljs.tools.reader.read_symbolic_value;
    default:
      return null;
  }
};
cljs.tools.reader.read_tagged = function(a, b, c, d) {
  b = cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d);
  b instanceof cljs.core.Symbol || cljs.tools.reader.impl.errors.throw_bad_reader_tag.call(null, a, b);
  if (cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)) {
    return cljs.core.tagged_literal.call(null, b, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d));
  }
  var e = cljs.tools.reader._STAR_data_readers_STAR_.call(null, b);
  e = cljs.core.truth_(e) ? e : cljs.tools.reader.default_data_readers.call(null, b);
  if (cljs.core.truth_(e)) {
    return e.call(null, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d));
  }
  e = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
  return cljs.core.truth_(e) ? e.call(null, b, cljs.tools.reader.read_STAR_.call(null, a, !0, null, c, d)) : cljs.tools.reader.impl.errors.throw_unknown_reader_tag.call(null, a, b);
};
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = !1;
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = function(a, b, c, d, e, f) {
  for (;;) {
    if (cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null, a) && !cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, cljs.tools.reader.reader_types.peek_char.call(null, a))) {
      return cljs.tools.reader.reader_types.log_source_STAR_.call(null, a, function() {
        for (;;) {
          if (goog.array.isEmpty(f)) {
            var g = cljs.tools.reader.reader_types.read_char.call(null, a);
            if (!cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, g)) {
              if (null == g) {
                return b ? cljs.tools.reader.impl.errors.throw_eof_error.call(null, a, null) : c;
              }
              if (g === d) {
                return cljs.tools.reader.READ_FINISHED;
              }
              if (cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null, a, g)) {
                return cljs.tools.reader.read_number.call(null, a, g);
              }
              var h = cljs.tools.reader.macros.call(null, g);
              if (null != h) {
                if (g = h.call(null, a, g, e, f), g !== a) {
                  return g;
                }
              } else {
                return cljs.tools.reader.read_symbol.call(null, a, g);
              }
            }
          } else {
            return g = f[0], goog.array.removeAt(f, 0), g;
          }
        }
      });
    }
    if (goog.array.isEmpty(f)) {
      var g = cljs.tools.reader.reader_types.read_char.call(null, a);
      if (!cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, g)) {
        if (null == g) {
          return b ? cljs.tools.reader.impl.errors.throw_eof_error.call(null, a, null) : c;
        }
        if (g === d) {
          return cljs.tools.reader.READ_FINISHED;
        }
        if (cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null, a, g)) {
          return cljs.tools.reader.read_number.call(null, a, g);
        }
        var h = cljs.tools.reader.macros.call(null, g);
        if (null != h) {
          if (g = h.call(null, a, g, e, f), g !== a) {
            return g;
          }
        } else {
          return cljs.tools.reader.read_symbol.call(null, a, g);
        }
      }
    } else {
      return g = f[0], goog.array.removeAt(f, 0), g;
    }
  }
};
cljs.tools.reader.read_STAR_ = function(a) {
  switch(arguments.length) {
    case 5:
      return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  return cljs.tools.reader.read_STAR_.call(null, a, b, c, null, d, e);
};
cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = function(a, b, c, d, e, f) {
  try {
    return cljs.tools.reader.read_STAR__internal.call(null, a, b, c, d, e, f);
  } catch (g) {
    if (g instanceof Error) {
      b = g;
      if (cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null, b)) {
        c = cljs.core.ex_data.call(null, b);
        if (cljs.core._EQ_.call(null, new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098), (new cljs.core.Keyword(null, "type", "type", 1174270348)).cljs$core$IFn$_invoke$arity$1(c))) {
          throw b;
        }
        throw cljs.core.ex_info.call(null, b.message, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098)], null), c, cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "line", "line", 212345235), cljs.tools.reader.reader_types.get_line_number.call(null, 
        a), new cljs.core.Keyword(null, "column", "column", 2078222095), cljs.tools.reader.reader_types.get_column_number.call(null, a), new cljs.core.Keyword(null, "file", "file", -1269645878), cljs.tools.reader.reader_types.get_file_name.call(null, a)], null) : null), b);
      }
      throw cljs.core.ex_info.call(null, b.message, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098)], null), cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "line", "line", 212345235), cljs.tools.reader.reader_types.get_line_number.call(null, a), new cljs.core.Keyword(null, 
      "column", "column", 2078222095), cljs.tools.reader.reader_types.get_column_number.call(null, a), new cljs.core.Keyword(null, "file", "file", -1269645878), cljs.tools.reader.reader_types.get_file_name.call(null, a)], null) : null), b);
    }
    throw g;
  }
};
cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;
cljs.tools.reader.read = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.read.call(null, a, !0, null);
};
cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  a = null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a;
  var c = cljs.core.get.call(null, a, new cljs.core.Keyword(null, "eof", "eof", -489063237), new cljs.core.Keyword(null, "eofthrow", "eofthrow", -334166531));
  return cljs.tools.reader.read_STAR_.call(null, b, cljs.core._EQ_.call(null, c, new cljs.core.Keyword(null, "eofthrow", "eofthrow", -334166531)), c, null, a, cljs.core.to_array.call(null, cljs.core.PersistentVector.EMPTY));
};
cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.tools.reader.read_STAR_.call(null, a, b, c, null, cljs.core.PersistentArrayMap.EMPTY, cljs.core.to_array.call(null, cljs.core.PersistentVector.EMPTY));
};
cljs.tools.reader.read.cljs$lang$maxFixedArity = 3;
cljs.tools.reader.read_string = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.read_string.call(null, cljs.core.PersistentArrayMap.EMPTY, a);
};
cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.truth_(cljs.core.truth_(b) ? "" !== b : b) ? cljs.tools.reader.read.call(null, a, cljs.tools.reader.reader_types.string_push_back_reader.call(null, b)) : null;
};
cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;
cljs.tools.reader.read_PLUS_string = function(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  b = 1 < b.length ? new cljs.core.IndexedSeq(b.slice(1), 0, null) : null;
  return cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$variadic(arguments[0], b);
};
cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$variadic = function(a, b) {
  var c = function(a) {
    return cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null, "buffer", "buffer", 617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null, a.frames)));
  }, d = cljs.core.count.call(null, c.call(null, a)), e = cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null, a) && !cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, cljs.tools.reader.reader_types.peek_char.call(null, a)) ? cljs.tools.reader.reader_types.log_source_STAR_.call(null, a, function(c, d) {
    return function() {
      return cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, b)) ? cljs.tools.reader.read.call(null, cljs.core.first.call(null, b), a) : cljs.core.apply.call(null, cljs.tools.reader.read, a, b);
    };
  }(c, d)) : cljs.core._EQ_.call(null, 1, cljs.core.count.call(null, b)) ? cljs.tools.reader.read.call(null, cljs.core.first.call(null, b), a) : cljs.core.apply.call(null, cljs.tools.reader.read, a, b);
  c = cljs.core.subs.call(null, c.call(null, a), d).trim();
  return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e, c], null);
};
cljs.tools.reader.read_PLUS_string.cljs$lang$maxFixedArity = 1;
cljs.tools.reader.read_PLUS_string.cljs$lang$applyTo = function(a) {
  var b = cljs.core.first.call(null, a);
  a = cljs.core.next.call(null, a);
  return this.cljs$core$IFn$_invoke$arity$variadic(b, a);
};
cljs.tools.reader.edn = {};
cljs.tools.reader.edn.macro_terminating_QMARK_ = function(a) {
  var b = "#" !== a;
  return b && (b = "'" !== a) ? (b = ":" !== a) ? cljs.tools.reader.edn.macros.call(null, a) : b : b;
};
cljs.tools.reader.edn.not_constituent_QMARK_ = function(a) {
  return "@" === a || "`" === a || "~" === a;
};
cljs.tools.reader.edn.read_token = function(a) {
  switch(arguments.length) {
    case 3:
      return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = function(a, b, c) {
  return cljs.tools.reader.edn.read_token.call(null, a, b, c, !0);
};
cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  if (cljs.core.not.call(null, c)) {
    return cljs.tools.reader.impl.errors.throw_eof_at_start.call(null, a, b);
  }
  if (cljs.core.truth_(cljs.core.truth_(d) ? cljs.tools.reader.edn.not_constituent_QMARK_.call(null, c) : d)) {
    return cljs.tools.reader.impl.errors.throw_bad_char.call(null, a, b, c);
  }
  d = new goog.string.StringBuffer;
  for (cljs.tools.reader.reader_types.unread.call(null, a, c);;) {
    if (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, c) || cljs.tools.reader.edn.macro_terminating_QMARK_.call(null, c) || null == c) {
      return cljs.core.str.cljs$core$IFn$_invoke$arity$1(d);
    }
    if (cljs.tools.reader.edn.not_constituent_QMARK_.call(null, c)) {
      return cljs.tools.reader.impl.errors.throw_bad_char.call(null, a, b, c);
    }
    d.append(cljs.tools.reader.reader_types.read_char.call(null, a));
    c = cljs.tools.reader.reader_types.peek_char.call(null, a);
  }
};
cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 4;
cljs.tools.reader.edn.read_dispatch = function(a, b, c) {
  var d = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (cljs.core.truth_(d)) {
    b = cljs.tools.reader.edn.dispatch_macros.call(null, d);
    if (cljs.core.truth_(b)) {
      return b.call(null, a, d, c);
    }
    c = cljs.tools.reader.edn.read_tagged.call(null, function() {
      cljs.tools.reader.reader_types.unread.call(null, a, d);
      return a;
    }(), d, c);
    return cljs.core.truth_(c) ? c : cljs.tools.reader.impl.errors.throw_no_dispatch.call(null, a, d);
  }
  return cljs.tools.reader.impl.errors.throw_eof_at_dispatch.call(null, a);
};
cljs.tools.reader.edn.read_unmatched_delimiter = function(a, b, c) {
  return cljs.tools.reader.impl.errors.throw_unmatch_delimiter.call(null, a, b);
};
cljs.tools.reader.edn.read_unicode_char = function(a) {
  switch(arguments.length) {
    case 4:
      return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  c = b + c;
  cljs.core.count.call(null, a) !== c && cljs.tools.reader.impl.errors.throw_invalid_unicode_literal.call(null, null, a);
  for (var e = 0;;) {
    if (b === c) {
      return String.fromCharCode(e);
    }
    var f = cljs.tools.reader.impl.utils.char_code.call(null, cljs.core.nth.call(null, a, b), d);
    if (-1 === f) {
      return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token.call(null, null, cljs.core.nth.call(null, a, b), a);
    }
    e = f + e * d;
    b += 1;
  }
};
cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = function(a, b, c, d, e) {
  for (var f = 1, g = cljs.tools.reader.impl.utils.char_code.call(null, b, c);;) {
    if (-1 === g) {
      return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null, a, b);
    }
    if (f !== d) {
      var h = cljs.tools.reader.reader_types.peek_char.call(null, a);
      if (cljs.core.truth_(function() {
        var a = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, h);
        if (a) {
          return a;
        }
        a = cljs.tools.reader.edn.macros.call(null, h);
        return cljs.core.truth_(a) ? a : null == h;
      }())) {
        return cljs.core.truth_(e) ? cljs.tools.reader.impl.errors.throw_invalid_unicode_len.call(null, a, f, d) : String.fromCharCode(g);
      }
      var k = cljs.tools.reader.impl.utils.char_code.call(null, h, c);
      cljs.tools.reader.reader_types.read_char.call(null, a);
      if (-1 === k) {
        return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null, a, h);
      }
      g = k + g * c;
      f += 1;
    } else {
      return String.fromCharCode(g);
    }
  }
};
cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;
cljs.tools.reader.edn.upper_limit = 55295;
cljs.tools.reader.edn.lower_limit = 57344;
cljs.tools.reader.edn.read_char_STAR_ = function(a, b, c) {
  b = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (null != b) {
    b = cljs.tools.reader.edn.macro_terminating_QMARK_.call(null, b) || cljs.tools.reader.edn.not_constituent_QMARK_.call(null, b) || cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b) ? cljs.core.str.cljs$core$IFn$_invoke$arity$1(b) : cljs.tools.reader.edn.read_token.call(null, a, new cljs.core.Keyword(null, "character", "character", 380652989), b, !1);
    c = cljs.core.count.call(null, b);
    if (1 === c) {
      return cljs.core.nth.call(null, b, 0);
    }
    if ("newline" === b) {
      return "\n";
    }
    if ("space" === b) {
      return " ";
    }
    if ("tab" === b) {
      return "\t";
    }
    if ("backspace" === b) {
      return "\b";
    }
    if ("formfeed" === b) {
      return "\f";
    }
    if ("return" === b) {
      return "\r";
    }
    if (cljs.core.truth_(goog.string.startsWith(b, "u"))) {
      return b = cljs.tools.reader.edn.read_unicode_char.call(null, b, 1, 4, 16), c = b.charCodeAt(), c > cljs.tools.reader.edn.upper_limit && c < cljs.tools.reader.edn.lower_limit ? cljs.tools.reader.impl.errors.throw_invalid_character_literal.call(null, a, c.toString(16)) : b;
    }
    if (cljs.core.truth_(goog.string.startsWith(b, "o"))) {
      --c;
      if (3 < c) {
        return cljs.tools.reader.impl.errors.throw_invalid_octal_len.call(null, a, b);
      }
      b = cljs.tools.reader.edn.read_unicode_char.call(null, b, 1, c, 8);
      return 255 < (b | 0) ? cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null, a) : b;
    }
    return cljs.tools.reader.impl.errors.throw_unsupported_character.call(null, a, b);
  }
  return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null, a);
};
cljs.tools.reader.edn.starting_line_col_info = function(a) {
  return cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null, a), (cljs.tools.reader.reader_types.get_column_number.call(null, a) | 0) - 1 | 0], null) : null;
};
cljs.tools.reader.edn.read_delimited = function(a, b, c, d) {
  var e = cljs.tools.reader.edn.starting_line_col_info.call(null, c), f = cljs.core.nth.call(null, e, 0, null);
  e = cljs.core.nth.call(null, e, 1, null);
  b = cljs.tools.reader.impl.utils.char$.call(null, b);
  for (var g = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
    var h = cljs.tools.reader.impl.commons.read_past.call(null, cljs.tools.reader.impl.utils.whitespace_QMARK_, c);
    cljs.core.truth_(h) || cljs.tools.reader.impl.errors.throw_eof_delimited.call(null, c, a, f, e, cljs.core.count.call(null, g));
    if (cljs.core._EQ_.call(null, b, cljs.tools.reader.impl.utils.char$.call(null, h))) {
      return cljs.core.persistent_BANG_.call(null, g);
    }
    var k = cljs.tools.reader.edn.macros.call(null, h);
    cljs.core.truth_(k) ? (k = k.call(null, c, h, d), g = k !== c ? cljs.core.conj_BANG_.call(null, g, k) : g) : (k = cljs.tools.reader.edn.read.call(null, function() {
      cljs.tools.reader.reader_types.unread.call(null, c, h);
      return c;
    }(), !0, null, d), g = k !== c ? cljs.core.conj_BANG_.call(null, g, k) : g);
  }
};
cljs.tools.reader.edn.read_list = function(a, b, c) {
  a = cljs.tools.reader.edn.read_delimited.call(null, new cljs.core.Keyword(null, "list", "list", 765357683), ")", a, c);
  return cljs.core.empty_QMARK_.call(null, a) ? cljs.core.List.EMPTY : cljs.core.apply.call(null, cljs.core.list, a);
};
cljs.tools.reader.edn.read_vector = function(a, b, c) {
  return cljs.tools.reader.edn.read_delimited.call(null, new cljs.core.Keyword(null, "vector", "vector", 1902966158), "]", a, c);
};
cljs.tools.reader.edn.read_map = function(a, b, c) {
  var d = cljs.tools.reader.edn.starting_line_col_info.call(null, a);
  b = cljs.core.nth.call(null, d, 0, null);
  d = cljs.core.nth.call(null, d, 1, null);
  c = cljs.tools.reader.edn.read_delimited.call(null, new cljs.core.Keyword(null, "map", "map", 1371690461), "}", a, c);
  var e = cljs.core.count.call(null, c), f = cljs.core.take_nth.call(null, 2, c), g = cljs.core.set.call(null, f);
  cljs.core.odd_QMARK_.call(null, e) && cljs.tools.reader.impl.errors.throw_odd_map.call(null, a, b, d, c);
  cljs.core._EQ_.call(null, cljs.core.count.call(null, g), cljs.core.count.call(null, f)) || cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "map", "map", 1371690461), f);
  return e <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array.call(null, c), !0, !0) : cljs.core.PersistentHashMap.fromArray(cljs.core.to_array.call(null, c), !0);
};
cljs.tools.reader.edn.read_number = function(a, b, c) {
  for (var d = function() {
    var a = new goog.string.StringBuffer;
    a.append(b);
    return a;
  }(), e = cljs.tools.reader.reader_types.read_char.call(null, a);;) {
    if (cljs.core.truth_(function() {
      var a = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, e);
      if (a) {
        return a;
      }
      a = cljs.tools.reader.edn.macros.call(null, e);
      return cljs.core.truth_(a) ? a : null == e;
    }())) {
      c = cljs.core.str.cljs$core$IFn$_invoke$arity$1(d);
      cljs.tools.reader.reader_types.unread.call(null, a, e);
      var f = cljs.tools.reader.impl.commons.match_number.call(null, c);
      return cljs.core.truth_(f) ? f : cljs.tools.reader.impl.errors.throw_invalid_number.call(null, a, c);
    }
    c = function() {
      var a = d;
      a.append(e);
      return a;
    }();
    f = cljs.tools.reader.reader_types.read_char.call(null, a);
    d = c;
    e = f;
  }
};
cljs.tools.reader.edn.escape_char = function(a, b) {
  a = cljs.tools.reader.reader_types.read_char.call(null, b);
  switch(a) {
    case "t":
      return "\t";
    case "r":
      return "\r";
    case "n":
      return "\n";
    case "\\":
      return "\\";
    case '"':
      return '"';
    case "b":
      return "\b";
    case "f":
      return "\f";
    case "u":
      return a = cljs.tools.reader.reader_types.read_char.call(null, b), -1 === parseInt(a | 0, 16) ? cljs.tools.reader.impl.errors.throw_invalid_unicode_escape.call(null, b, a) : cljs.tools.reader.edn.read_unicode_char.call(null, b, a, 16, 4, !0);
    default:
      return cljs.tools.reader.impl.utils.numeric_QMARK_.call(null, a) ? (a = cljs.tools.reader.edn.read_unicode_char.call(null, b, a, 8, 3, !1), 255 < (a | 0) ? cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null, b) : a) : cljs.tools.reader.impl.errors.throw_bad_escape_char.call(null, b, a);
  }
};
cljs.tools.reader.edn.read_string_STAR_ = function(a, b, c) {
  for (var d = new goog.string.StringBuffer, e = cljs.tools.reader.reader_types.read_char.call(null, a);;) {
    b = e;
    if (cljs.core._EQ_.call(null, null, b)) {
      return cljs.tools.reader.impl.errors.throw_eof_reading.call(null, a, new cljs.core.Keyword(null, "string", "string", -1989541586), '"', d);
    }
    if (cljs.core._EQ_.call(null, "\\", b)) {
      b = function() {
        var b = d;
        b.append(cljs.tools.reader.edn.escape_char.call(null, d, a));
        return b;
      }(), c = cljs.tools.reader.reader_types.read_char.call(null, a), d = b, e = c;
    } else {
      if (cljs.core._EQ_.call(null, '"', b)) {
        return cljs.core.str.cljs$core$IFn$_invoke$arity$1(d);
      }
      b = function() {
        var a = d;
        a.append(e);
        return a;
      }();
      c = cljs.tools.reader.reader_types.read_char.call(null, a);
      d = b;
      e = c;
    }
  }
};
cljs.tools.reader.edn.read_symbol = function(a, b) {
  b = cljs.tools.reader.edn.read_token.call(null, a, new cljs.core.Keyword(null, "symbol", "symbol", -1038572696), b);
  if (cljs.core.truth_(b)) {
    switch(b) {
      case "nil":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      case "/":
        return new cljs.core.Symbol(null, "/", "/", -1371932971, null);
      default:
        var c = cljs.tools.reader.impl.commons.parse_symbol.call(null, b);
        c = cljs.core.truth_(c) ? cljs.core.symbol.call(null, c.call(null, 0), c.call(null, 1)) : null;
        return cljs.core.truth_(c) ? c : cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "symbol", "symbol", -1038572696), b);
    }
  } else {
    return null;
  }
};
cljs.tools.reader.edn.read_keyword = function(a, b, c) {
  b = cljs.tools.reader.reader_types.read_char.call(null, a);
  if (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, b)) {
    return cljs.tools.reader.impl.errors.throw_single_colon.call(null, a);
  }
  b = cljs.tools.reader.edn.read_token.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), b);
  var d = cljs.tools.reader.impl.commons.parse_symbol.call(null, b);
  return cljs.core.truth_(cljs.core.truth_(d) ? -1 === b.indexOf("::") : d) ? (c = d.call(null, 0), d = d.call(null, 1), ":" === cljs.core.nth.call(null, b, 0) ? cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), b) : cljs.core.keyword.call(null, c, d)) : cljs.tools.reader.impl.errors.throw_invalid.call(null, a, new cljs.core.Keyword(null, "keyword", "keyword", 811389747), b);
};
cljs.tools.reader.edn.wrapping_reader = function(a) {
  return function(b, c, d) {
    return new cljs.core.List(null, a, new cljs.core.List(null, cljs.tools.reader.edn.read.call(null, b, !0, null, d), null, 1, null), 2, null);
  };
};
cljs.tools.reader.edn.read_meta = function(a, b, c) {
  b = cljs.tools.reader.impl.utils.desugar_meta.call(null, cljs.tools.reader.edn.read.call(null, a, !0, null, c));
  cljs.core.map_QMARK_.call(null, b) || cljs.tools.reader.impl.errors.throw_bad_metadata.call(null, a, b);
  c = cljs.tools.reader.edn.read.call(null, a, !0, null, c);
  return null != c && (c.cljs$lang$protocol_mask$partition0$ & 131072 || cljs.core.PROTOCOL_SENTINEL === c.cljs$core$IMeta$) ? cljs.core.with_meta.call(null, c, cljs.core.merge.call(null, cljs.core.meta.call(null, c), b)) : cljs.tools.reader.impl.errors.throw_bad_metadata_target.call(null, a, c);
};
cljs.tools.reader.edn.read_set = function(a, b, c) {
  b = cljs.tools.reader.edn.read_delimited.call(null, new cljs.core.Keyword(null, "set", "set", 304602554), "}", a, c);
  c = cljs.core.set.call(null, b);
  cljs.core._EQ_.call(null, cljs.core.count.call(null, b), cljs.core.count.call(null, c)) || cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "set", "set", 304602554), b);
  return c;
};
cljs.tools.reader.edn.read_discard = function(a, b, c) {
  cljs.tools.reader.edn.read.call(null, a, !0, null, !0);
  return a;
};
cljs.tools.reader.edn.read_namespaced_map = function(a, b, c) {
  b = cljs.tools.reader.edn.read_token.call(null, a, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), cljs.tools.reader.reader_types.read_char.call(null, a));
  var d = null == b ? null : cljs.tools.reader.impl.commons.parse_symbol.call(null, b);
  d = null == d ? null : cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null, d);
  return cljs.core.truth_(d) ? "{" === cljs.tools.reader.impl.commons.read_past.call(null, cljs.tools.reader.impl.utils.whitespace_QMARK_, a) ? (c = cljs.tools.reader.edn.read_delimited.call(null, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), "}", a, c), cljs.core.odd_QMARK_.call(null, cljs.core.count.call(null, c)) && cljs.tools.reader.impl.errors.throw_odd_map.call(null, a, null, null, c), b = cljs.tools.reader.impl.utils.namespace_keys.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(d), 
  cljs.core.take_nth.call(null, 2, c)), c = cljs.core.take_nth.call(null, 2, cljs.core.rest.call(null, c)), cljs.core._EQ_.call(null, cljs.core.count.call(null, cljs.core.set.call(null, b)), cljs.core.count.call(null, b)) || cljs.tools.reader.impl.errors.throw_dup_keys.call(null, a, new cljs.core.Keyword(null, "namespaced-map", "namespaced-map", 1235665380), b), cljs.core.zipmap.call(null, b, c)) : cljs.tools.reader.impl.errors.throw_ns_map_no_map.call(null, a, b) : cljs.tools.reader.impl.errors.throw_bad_ns.call(null, 
  a, b);
};
cljs.tools.reader.edn.read_symbolic_value = function(a, b, c) {
  b = cljs.tools.reader.edn.read.call(null, a, !0, null, c);
  return cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "NaN", "NaN", 666918153, null), b) ? Number.NaN : cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "-Inf", "-Inf", -2123243689, null), b) ? Number.NEGATIVE_INFINITY : cljs.core._EQ_.call(null, new cljs.core.Symbol(null, "Inf", "Inf", 647172781, null), b) ? Number.POSITIVE_INFINITY : cljs.tools.reader.impl.errors.reader_error.call(null, a, ["Invalid token: ##", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(""));
};
cljs.tools.reader.edn.macros = function(a) {
  switch(a) {
    case '"':
      return cljs.tools.reader.edn.read_string_STAR_;
    case ":":
      return cljs.tools.reader.edn.read_keyword;
    case ";":
      return cljs.tools.reader.impl.commons.read_comment;
    case "^":
      return cljs.tools.reader.edn.read_meta;
    case "(":
      return cljs.tools.reader.edn.read_list;
    case ")":
      return cljs.tools.reader.edn.read_unmatched_delimiter;
    case "[":
      return cljs.tools.reader.edn.read_vector;
    case "]":
      return cljs.tools.reader.edn.read_unmatched_delimiter;
    case "{":
      return cljs.tools.reader.edn.read_map;
    case "}":
      return cljs.tools.reader.edn.read_unmatched_delimiter;
    case "\\":
      return cljs.tools.reader.edn.read_char_STAR_;
    case "#":
      return cljs.tools.reader.edn.read_dispatch;
    default:
      return null;
  }
};
cljs.tools.reader.edn.dispatch_macros = function(a) {
  switch(a) {
    case "^":
      return cljs.tools.reader.edn.read_meta;
    case "{":
      return cljs.tools.reader.edn.read_set;
    case "\x3c":
      return cljs.tools.reader.impl.commons.throwing_reader.call(null, "Unreadable form");
    case "!":
      return cljs.tools.reader.impl.commons.read_comment;
    case "_":
      return cljs.tools.reader.edn.read_discard;
    case ":":
      return cljs.tools.reader.edn.read_namespaced_map;
    case "#":
      return cljs.tools.reader.edn.read_symbolic_value;
    default:
      return null;
  }
};
cljs.tools.reader.edn.read_tagged = function(a, b, c) {
  b = cljs.tools.reader.edn.read.call(null, a, !0, null, c);
  var d = cljs.tools.reader.edn.read.call(null, a, !0, null, c);
  b instanceof cljs.core.Symbol || cljs.tools.reader.impl.errors.throw_bad_reader_tag.call(null, a, "Reader tag must be a symbol");
  var e = cljs.core.get.call(null, (new cljs.core.Keyword(null, "readers", "readers", -2118263030)).cljs$core$IFn$_invoke$arity$1(c), b);
  e = cljs.core.truth_(e) ? e : cljs.tools.reader.default_data_readers.call(null, b);
  if (cljs.core.truth_(e)) {
    return e.call(null, d);
  }
  c = (new cljs.core.Keyword(null, "default", "default", -1987822328)).cljs$core$IFn$_invoke$arity$1(c);
  return cljs.core.truth_(c) ? c.call(null, b, d) : cljs.tools.reader.impl.errors.throw_unknown_reader_tag.call(null, a, b);
};
cljs.tools.reader.edn.read = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.edn.read.call(null, cljs.core.PersistentArrayMap.EMPTY, a);
};
cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  a = null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a;
  var c = cljs.core.get.call(null, a, new cljs.core.Keyword(null, "eof", "eof", -489063237)), d = !cljs.core.contains_QMARK_.call(null, a, new cljs.core.Keyword(null, "eof", "eof", -489063237));
  return cljs.tools.reader.edn.read.call(null, b, d, c, a);
};
cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  try {
    for (;;) {
      var e = cljs.tools.reader.reader_types.read_char.call(null, a);
      if (!cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null, e)) {
        if (null == e) {
          return cljs.core.truth_(b) ? cljs.tools.reader.impl.errors.throw_eof_error.call(null, a, null) : c;
        }
        if (cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null, a, e)) {
          return cljs.tools.reader.edn.read_number.call(null, a, e, d);
        }
        var f = cljs.tools.reader.edn.macros.call(null, e);
        if (cljs.core.truth_(f)) {
          var g = f.call(null, a, e, d);
          if (g !== a) {
            return g;
          }
        } else {
          return cljs.tools.reader.edn.read_symbol.call(null, a, e);
        }
      }
    }
  } catch (h) {
    if (h instanceof Error) {
      b = h;
      if (cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null, b)) {
        c = cljs.core.ex_data.call(null, b);
        if (cljs.core._EQ_.call(null, new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098), (new cljs.core.Keyword(null, "type", "type", 1174270348)).cljs$core$IFn$_invoke$arity$1(c))) {
          throw b;
        }
        throw cljs.core.ex_info.call(null, b.message, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098)], null), c, cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "line", "line", 212345235), cljs.tools.reader.reader_types.get_line_number.call(null, 
        a), new cljs.core.Keyword(null, "column", "column", 2078222095), cljs.tools.reader.reader_types.get_column_number.call(null, a), new cljs.core.Keyword(null, "file", "file", -1269645878), cljs.tools.reader.reader_types.get_file_name.call(null, a)], null) : null), b);
      }
      throw cljs.core.ex_info.call(null, b.message, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "type", "type", 1174270348), new cljs.core.Keyword(null, "reader-exception", "reader-exception", -1938323098)], null), cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null, a) ? new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "line", "line", 212345235), cljs.tools.reader.reader_types.get_line_number.call(null, a), new cljs.core.Keyword(null, 
      "column", "column", 2078222095), cljs.tools.reader.reader_types.get_column_number.call(null, a), new cljs.core.Keyword(null, "file", "file", -1269645878), cljs.tools.reader.reader_types.get_file_name.call(null, a)], null) : null), b);
    }
    throw h;
  }
};
cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;
cljs.tools.reader.edn.read_string = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.edn.read_string.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "eof", "eof", -489063237), null], null), a);
};
cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.core.truth_(cljs.core.truth_(b) ? cljs.core.not_EQ_.call(null, b, "") : b) ? cljs.tools.reader.edn.read.call(null, a, cljs.tools.reader.reader_types.string_push_back_reader.call(null, b)) : null;
};
cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;
cljs.reader = {};
cljs.reader.zero_fill_right_and_truncate = function(a, b) {
  if (cljs.core._EQ_.call(null, b, cljs.core.count.call(null, a))) {
    return a;
  }
  if (b < cljs.core.count.call(null, a)) {
    return cljs.core.subs.call(null, a, 0, b);
  }
  for (a = new goog.string.StringBuffer(a);;) {
    if (a.getLength() < b) {
      a = a.append("0");
    } else {
      return a.toString();
    }
  }
};
cljs.reader.divisible_QMARK_ = function(a, b) {
  return 0 === cljs.core.mod.call(null, a, b);
};
cljs.reader.indivisible_QMARK_ = function(a, b) {
  return !cljs.reader.divisible_QMARK_.call(null, a, b);
};
cljs.reader.leap_year_QMARK_ = function(a) {
  return cljs.reader.divisible_QMARK_.call(null, a, 4) && (cljs.reader.indivisible_QMARK_.call(null, a, 100) || cljs.reader.divisible_QMARK_.call(null, a, 400));
};
cljs.reader.days_in_month = function() {
  var a = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(a, b) {
    return function(c, d) {
      return cljs.core.get.call(null, cljs.core.truth_(d) ? b : a, c);
    };
  }(a, b);
}();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = function(a) {
  a = parseInt(a, 10);
  return cljs.core.not.call(null, isNaN(a)) ? a : null;
};
cljs.reader.check = function(a, b, c, d) {
  if (!(a <= b && b <= c)) {
    throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(d), " Failed:  ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a), "\x3c\x3d", cljs.core.str.cljs$core$IFn$_invoke$arity$1(b), "\x3c\x3d", cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(""));
  }
  return b;
};
cljs.reader.parse_and_validate_timestamp = function(a) {
  var b = cljs.core.re_matches.call(null, cljs.reader.timestamp_regex, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), d = cljs.core.nth.call(null, b, 2, null), e = cljs.core.nth.call(null, b, 3, null), f = cljs.core.nth.call(null, b, 4, null), g = cljs.core.nth.call(null, b, 5, null), h = cljs.core.nth.call(null, b, 6, null), k = cljs.core.nth.call(null, b, 7, null), l = cljs.core.nth.call(null, b, 8, null), m = cljs.core.nth.call(null, b, 9, null), n = cljs.core.nth.call(null, b, 10, null);
  if (cljs.core.not.call(null, b)) {
    throw Error(["Unrecognized date/time syntax: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
  }
  a = cljs.reader.parse_int.call(null, c);
  b = function() {
    var a = cljs.reader.parse_int.call(null, d);
    return cljs.core.truth_(a) ? a : 1;
  }();
  c = function() {
    var a = cljs.reader.parse_int.call(null, e);
    return cljs.core.truth_(a) ? a : 1;
  }();
  var p = function() {
    var a = cljs.reader.parse_int.call(null, f);
    return cljs.core.truth_(a) ? a : 0;
  }(), q = function() {
    var a = cljs.reader.parse_int.call(null, g);
    return cljs.core.truth_(a) ? a : 0;
  }(), r = function() {
    var a = cljs.reader.parse_int.call(null, h);
    return cljs.core.truth_(a) ? a : 0;
  }(), t = function() {
    var a = cljs.reader.parse_int.call(null, cljs.reader.zero_fill_right_and_truncate.call(null, k, 3));
    return cljs.core.truth_(a) ? a : 0;
  }();
  l = cljs.core._EQ_.call(null, l, "-") ? -1 : 1;
  var u = function() {
    var a = cljs.reader.parse_int.call(null, m);
    return cljs.core.truth_(a) ? a : 0;
  }(), v = function() {
    var a = cljs.reader.parse_int.call(null, n);
    return cljs.core.truth_(a) ? a : 0;
  }();
  l *= 60 * u + v;
  return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a, cljs.reader.check.call(null, 1, b, 12, "timestamp month field must be in range 1..12"), cljs.reader.check.call(null, 1, c, cljs.reader.days_in_month.call(null, b, cljs.reader.leap_year_QMARK_.call(null, a)), "timestamp day field must be in range 1..last day in month"), cljs.reader.check.call(null, 0, p, 23, "timestamp hour field must be in range 0..23"), cljs.reader.check.call(null, 0, q, 59, "timestamp minute field must be in range 0..59"), 
  cljs.reader.check.call(null, 0, r, cljs.core._EQ_.call(null, q, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), cljs.reader.check.call(null, 0, t, 999, "timestamp millisecond field must be in range 0..999"), l], null);
};
cljs.reader.parse_timestamp = function(a) {
  var b = cljs.reader.parse_and_validate_timestamp.call(null, a);
  if (cljs.core.truth_(b)) {
    a = cljs.core.nth.call(null, b, 0, null);
    var c = cljs.core.nth.call(null, b, 1, null), d = cljs.core.nth.call(null, b, 2, null), e = cljs.core.nth.call(null, b, 3, null), f = cljs.core.nth.call(null, b, 4, null), g = cljs.core.nth.call(null, b, 5, null), h = cljs.core.nth.call(null, b, 6, null);
    b = cljs.core.nth.call(null, b, 7, null);
    return new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
  }
  throw Error(["Unrecognized date/time syntax: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(""));
};
cljs.reader.read_date = function(a) {
  if ("string" === typeof a) {
    return cljs.reader.parse_timestamp.call(null, a);
  }
  throw Error("Instance literal expects a string for its timestamp.");
};
cljs.reader.read_queue = function(a) {
  if (cljs.core.vector_QMARK_.call(null, a)) {
    return cljs.core.into.call(null, cljs.core.PersistentQueue.EMPTY, a);
  }
  throw Error("Queue literal expects a vector for its elements.");
};
cljs.reader.read_js = function(a) {
  if (cljs.core.vector_QMARK_.call(null, a)) {
    var b = [];
    a = cljs.core.seq.call(null, a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = cljs.core._nth.call(null, c, e);
        b.push(f);
        e += 1;
      } else {
        if (a = cljs.core.seq.call(null, a)) {
          c = a, cljs.core.chunked_seq_QMARK_.call(null, c) ? (a = cljs.core.chunk_first.call(null, c), e = cljs.core.chunk_rest.call(null, c), c = a, d = cljs.core.count.call(null, a), a = e) : (a = cljs.core.first.call(null, c), b.push(a), a = cljs.core.next.call(null, c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (cljs.core.map_QMARK_.call(null, a)) {
    b = {};
    a = cljs.core.seq.call(null, a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = cljs.core._nth.call(null, c, e);
        f = cljs.core.nth.call(null, g, 0, null);
        g = cljs.core.nth.call(null, g, 1, null);
        goog.object.set(b, cljs.core.name.call(null, f), g);
        e += 1;
      } else {
        if (a = cljs.core.seq.call(null, a)) {
          cljs.core.chunked_seq_QMARK_.call(null, a) ? (d = cljs.core.chunk_first.call(null, a), a = cljs.core.chunk_rest.call(null, a), c = d, d = cljs.core.count.call(null, d)) : (d = cljs.core.first.call(null, a), c = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null), goog.object.set(b, cljs.core.name.call(null, c), d), a = cljs.core.next.call(null, a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  throw Error("JS literal expects a vector or map containing only string or unqualified keyword keys");
};
cljs.reader.read_uuid = function(a) {
  if ("string" === typeof a) {
    return cljs.core.uuid.call(null, a);
  }
  throw Error("UUID literal expects a string as its representation.");
};
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null, null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null, "inst", "inst", -2008473268, null), cljs.reader.read_date, new cljs.core.Symbol(null, "uuid", "uuid", -504564192, null), cljs.reader.read_uuid, new cljs.core.Symbol(null, "queue", "queue", -1198599890, null), cljs.reader.read_queue, new cljs.core.Symbol(null, "js", "js", -886355190, null), cljs.reader.read_js], null), cljs.core.PersistentArrayMap.EMPTY));
cljs.reader.read = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.reader.read.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.reader.read.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return cljs.reader.read.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.edn.read.call(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "readers", "readers", -2118263030), cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), new cljs.core.Keyword(null, "default", "default", -1987822328), cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_), new cljs.core.Keyword(null, "eof", "eof", -489063237), null], null), a);
};
cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  var c = null != a && (a.cljs$lang$protocol_mask$partition0$ & 64 || cljs.core.PROTOCOL_SENTINEL === a.cljs$core$ISeq$) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, d = cljs.core.get.call(null, c, new cljs.core.Keyword(null, "eof", "eof", -489063237));
  return cljs.tools.reader.edn.read.call(null, cljs.core.update.call(null, cljs.core.merge.call(null, c, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "default", "default", -1987822328), cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_)], null)), new cljs.core.Keyword(null, "readers", "readers", -2118263030), function(a, b, c, d) {
    return function(a) {
      return cljs.core.merge.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a);
    };
  }(a, c, c, d)), b);
};
cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = function(a, b, c, d) {
  return cljs.tools.reader.edn.read.call(null, a, b, c, cljs.core.update.call(null, cljs.core.merge.call(null, d, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "default", "default", -1987822328), cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_)], null)), new cljs.core.Keyword(null, "readers", "readers", -2118263030), function(a) {
    return cljs.core.merge.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a);
  }));
};
cljs.reader.read.cljs$lang$maxFixedArity = 4;
cljs.reader.read_string = function(a) {
  switch(arguments.length) {
    case 1:
      return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = function(a) {
  return cljs.tools.reader.edn.read_string.call(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null, "readers", "readers", -2118263030), cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), new cljs.core.Keyword(null, "default", "default", -1987822328), cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_), new cljs.core.Keyword(null, "eof", "eof", -489063237), null], null), a);
};
cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = function(a, b) {
  return cljs.tools.reader.edn.read_string.call(null, cljs.core.update.call(null, cljs.core.merge.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "default", "default", -1987822328), cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_)], null), a), new cljs.core.Keyword(null, "readers", "readers", -2118263030), function(a) {
    return cljs.core.merge.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a);
  }), b);
};
cljs.reader.read_string.cljs$lang$maxFixedArity = 2;
cljs.reader.register_tag_parser_BANG_ = function(a, b) {
  var c = cljs.core.get.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_tag_table_STAR_, cljs.core.assoc, a, b);
  return c;
};
cljs.reader.deregister_tag_parser_BANG_ = function(a) {
  var b = cljs.core.get.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_tag_table_STAR_, cljs.core.dissoc, a);
  return b;
};
cljs.reader.register_default_tag_parser_BANG_ = function(a) {
  var b = cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_, function(b) {
    return function(b) {
      return a;
    };
  }(b));
  return b;
};
cljs.reader.deregister_default_tag_parser_BANG_ = function() {
  var a = cljs.core.deref.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_default_data_reader_fn_STAR_, function(a) {
    return function(a) {
      return null;
    };
  }(a));
  return a;
};
ex05.worker = {};
ex05.worker.state = cljs.core.atom.call(null, cljs.core.PersistentArrayMap.EMPTY);
self.importScripts("base.js");
ex05.worker.start_ping = function(a) {
  setTimeout(function() {
    var b = (new Uint8Array(1.0E7)).buffer, c = thi.ng.strf.core.timestamp.call(null);
    self.postMessage([c, b, ["Worker running (", cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.now.call(null)), ")"].join("")], [b]);
    return cljs.core.truth_((new cljs.core.Keyword(null, "active?", "active?", 459499776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null, ex05.worker.state))) ? ex05.worker.start_ping.call(null, a) : null;
  }, a);
  return cljs.core.swap_BANG_.call(null, ex05.worker.state, cljs.core.assoc, new cljs.core.Keyword(null, "active?", "active?", 459499776), !0);
};
ex05.worker.stop_ping = function() {
  return cljs.core.swap_BANG_.call(null, ex05.worker.state, cljs.core.assoc, new cljs.core.Keyword(null, "active?", "active?", 459499776), !1);
};
ex05.worker.dispatch_command = function(a) {
  a = cljs.reader.read_string.call(null, a.data);
  var b = cljs.core.keyword.call(null, (new cljs.core.Keyword(null, "command", "command", -894540724)).cljs$core$IFn$_invoke$arity$1(a));
  switch(b instanceof cljs.core.Keyword ? b.fqn : null) {
    case "start":
      return ex05.worker.start_ping.call(null, (new cljs.core.Keyword(null, "interval", "interval", 1708495417)).cljs$core$IFn$_invoke$arity$1(a));
    case "stop":
      return ex05.worker.stop_ping.call(null);
    default:
      return console.warn(["unknown worker command: ", cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null, "command", "command", -894540724)).cljs$core$IFn$_invoke$arity$1(a))].join(""));
  }
};
self.onmessage = ex05.worker.dispatch_command;

//# sourceMappingURL=worker.js.map

