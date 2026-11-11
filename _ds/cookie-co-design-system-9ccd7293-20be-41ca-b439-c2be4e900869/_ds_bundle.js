/* @ds-bundle: {"format":4,"namespace":"CookieCoDesignSystem_9ccd72","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"b171497ca0b3","components/commerce/QuantityStepper.jsx":"8b5f688b15bd","components/core/Badge.jsx":"dbc65b227578","components/core/Button.jsx":"3c1d7b9d86fe","components/core/Card.jsx":"0c81ed86967e","components/core/Icon.jsx":"c81f31c05ed9","components/core/IconButton.jsx":"42f9f1a8fdd1","components/core/Tag.jsx":"82e19ca9232c","components/feedback/Dialog.jsx":"81125a6a0ba2","components/feedback/Toast.jsx":"191993b5a26d","components/feedback/Tooltip.jsx":"237d4667c28e","components/forms/Checkbox.jsx":"169f6938dae9","components/forms/Input.jsx":"13829bc15f3d","components/forms/Radio.jsx":"4bc6f3289ce5","components/forms/Select.jsx":"ff34378c6ce0","components/forms/Switch.jsx":"054a40ed5a63","components/navigation/Tabs.jsx":"a8cf2c11a1ba","ui_kits/app-club/AppScreens.jsx":"2eca8080d913","ui_kits/web-boutique/Chrome.jsx":"37638137d096","ui_kits/web-boutique/Screens.jsx":"0af6c7dcc083"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CookieCoDesignSystem_9ccd72 = window.CookieCoDesignSystem_9ccd72 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Boutique product tile: 3D-tilted lid, price, one action. */
function ProductCard({
  name,
  note,
  price,
  badge,
  image,
  tone = 'vitrina',
  onAdd,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gap: 0,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-boutique), box-shadow var(--dur-base) var(--ease-boutique)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: tone === 'nocturno' ? 'var(--grad-nocturno)' : 'var(--grad-vitrina)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-boutique)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56%',
      aspectRatio: '1',
      borderRadius: 'var(--radius-xl)',
      background: tone === 'nocturno' ? 'rgba(253,250,245,.10)' : 'rgba(255,255,255,.55)',
      border: '1px solid rgba(255,255,255,.5)',
      boxShadow: 'var(--shadow-md), var(--shadow-inset-sheen)',
      transform: hover ? 'perspective(900px) rotateX(6deg) rotateY(-8deg) translateY(-4px)' : 'perspective(900px) rotateX(4deg) rotateY(-4deg)',
      transition: 'transform var(--dur-slow) var(--ease-boutique)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      height: 24,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(253,250,245,.86)',
      backdropFilter: 'var(--blur-glass)',
      fontSize: 'var(--size-micro)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--morado-700)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-title-sm)/1.25 var(--font-display)',
      color: 'var(--text-display)'
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-body-md)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-body)'
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: hover ? 'var(--accent-primary)' : 'var(--accent-soft)',
      color: hover ? 'var(--text-on-brand)' : 'var(--morado-700)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      transition: 'all var(--dur-fast) var(--ease-boutique)'
    }
  }, "A\xF1adir"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** −/+ quantity control used in the cart and product page. */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const h = size === 'sm' ? 34 : 44;
  const step = d => onChange && onChange(Math.min(max, Math.max(min, value + d)));
  const btn = {
    width: h,
    height: h,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: 'var(--text-body)',
    fontSize: 16,
    fontFamily: 'var(--font-sans)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-inset-well)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Quitar uno",
    onClick: () => step(-1),
    style: btn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 26,
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-body-md)',
      color: 'var(--text-display)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "A\xF1adir uno",
    onClick: () => step(1),
    style: btn
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--crema-100)',
    color: 'var(--text-muted)'
  },
  brand: {
    background: 'var(--lila-100)',
    color: 'var(--morado-700)'
  },
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--status-success)'
  },
  warning: {
    background: 'var(--status-warning-bg)',
    color: 'var(--status-warning)'
  },
  danger: {
    background: 'var(--status-danger-bg)',
    color: 'var(--status-danger)'
  },
  inverse: {
    background: 'var(--ink-900)',
    color: 'var(--crema-50)'
  }
};

/** Small status marker. */
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-micro)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 'var(--control-height-sm)',
    px: '16px',
    fs: '13px'
  },
  md: {
    h: 'var(--control-height-md)',
    px: '22px',
    fs: '14px'
  },
  lg: {
    h: 'var(--control-height-lg)',
    px: '30px',
    fs: '15px'
  }
};
const variants = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-md), var(--shadow-inset-sheen)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-sm)'
  },
  soft: {
    background: 'var(--accent-soft)',
    color: 'var(--morado-700)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  inverse: {
    background: 'var(--crema-50)',
    color: 'var(--ink-900)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-lg)'
  }
};

/** Primary action control. */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      height: s.h,
      padding: `0 ${s.px}`,
      minWidth: 0,
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'transform var(--dur-fast) var(--ease-boutique), background var(--dur-fast) var(--ease-boutique), box-shadow var(--dur-base) var(--ease-boutique)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.985)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, loading ? 'Un momento…' : children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  plain: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  vitrina: {
    background: 'var(--grad-vitrina)',
    color: 'var(--text-body)',
    border: '1px solid rgba(255,255,255,.5)'
  },
  nocturno: {
    background: 'var(--grad-nocturno)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--border-inverse)'
  },
  glass: {
    background: 'rgba(253,250,245,.62)',
    color: 'var(--text-body)',
    border: '1px solid rgba(255,255,255,.55)',
    backdropFilter: 'var(--blur-glass)'
  }
};

/** Container surface. Depth comes from shadow, never from a heavy border. */
function Card({
  surface = 'plain',
  elevation = 'sm',
  interactive = false,
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : shadow,
      transform: interactive && hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-boutique), box-shadow var(--dur-base) var(--ease-boutique)',
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/** Thin wrapper over the Lucide CDN sprite. Requires lucide's UMD script on the page. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.6,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dims = {
  sm: 34,
  md: 44,
  lg: 52
};

/** Square-free circular icon-only control. */
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const d = dims[size] || dims.md;
  const skin = {
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--morado-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    glass: {
      background: 'rgba(253,250,245,.72)',
      color: 'var(--ink-900)',
      border: '1px solid rgba(255,255,255,.6)',
      boxShadow: 'var(--shadow-sm)',
      backdropFilter: 'var(--blur-glass)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'transform var(--dur-fast) var(--ease-boutique), background var(--dur-fast) var(--ease-boutique)',
      ...skin,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable filter chip. */
function Tag({
  selected = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      cursor: 'pointer',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      flex: '0 0 auto',
      background: selected ? 'var(--ink-900)' : 'transparent',
      color: selected ? 'var(--crema-50)' : 'var(--text-body)',
      border: selected ? '1px solid var(--ink-900)' : '1px solid var(--border-default)',
      transition: 'all var(--dur-fast) var(--ease-boutique)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      opacity: .6,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal over a warm scrim. */
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  children,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-xl), var(--shadow-inset-sheen)',
      border: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--weight-regular) var(--size-title-lg)/var(--lh-title) var(--font-display)',
      color: 'var(--text-display)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 'var(--size-body-md)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Transient confirmation, bottom-centre. */
function Toast({
  tone = 'neutral',
  icon,
  title,
  action,
  style,
  ...rest
}) {
  const accent = {
    neutral: 'var(--lila-300)',
    success: 'var(--status-success)',
    warning: 'var(--status-warning)',
    danger: 'var(--status-danger)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: accent,
      flex: '0 0 auto'
    }
  }), icon, /*#__PURE__*/React.createElement("span", null, title), action && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lila-300)',
      fontWeight: 'var(--weight-semibold)',
      cursor: 'pointer'
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover hint; ink bubble, no arrow. */
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 40,
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '7px 12px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded-square checkbox, morado when checked. */
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-on-brand)',
      fontSize: 12,
      lineHeight: 1,
      background: checked ? 'var(--accent-primary)' : 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-strong)'),
      boxShadow: checked ? 'var(--shadow-sm)' : 'var(--shadow-inset-well)',
      transition: 'all var(--dur-fast) var(--ease-boutique)'
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field with warm well, hairline border and lila focus ring. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  suffix,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'grid',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-height-md)',
      padding: '0 16px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--border-accent)' : 'var(--border-default)'),
      boxShadow: focus ? 'var(--ring-soft)' : 'var(--shadow-inset-well)',
      transition: 'box-shadow var(--dur-fast) var(--ease-boutique), border-color var(--dur-fast) var(--ease-boutique)'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--weight-regular) var(--size-body-md)/1.4 var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-faint)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-choice control; renders as a card row when `asCard`. */
function Radio({
  label,
  description,
  checked = false,
  onChange,
  name,
  value,
  asCard = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      padding: asCard ? 'var(--space-4)' : 0,
      borderRadius: asCard ? 'var(--radius-md)' : 0,
      background: asCard ? checked ? 'var(--lila-50)' : 'var(--surface-card)' : 'transparent',
      border: asCard ? '1px solid ' + (checked ? 'var(--border-accent)' : 'var(--border-subtle)') : 'none',
      transition: 'all var(--dur-fast) var(--ease-boutique)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-strong)'),
      boxShadow: checked ? 'none' : 'var(--shadow-inset-well)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select wrapped in the Cookie.co well. */
function Select({
  label,
  options = [],
  hint,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: '100%',
      height: 'var(--control-height-md)',
      padding: '0 40px 0 16px',
      appearance: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-inset-well)',
      font: 'var(--weight-regular) var(--size-body-md)/1 var(--font-sans)',
      color: 'var(--text-body)',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)',
      fontSize: 11
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle for instant-effect settings. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      background: checked ? 'var(--accent-primary)' : 'var(--beige-300)',
      boxShadow: 'var(--shadow-inset-well)',
      transition: 'background var(--dur-base) var(--ease-boutique)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-boutique)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlineless segmented tabs; the active pill is ink. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: variant === 'pill' ? 4 : 24,
      padding: variant === 'pill' ? 4 : 0,
      borderRadius: 'var(--radius-pill)',
      background: variant === 'pill' ? 'var(--crema-100)' : 'transparent',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--size-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.02em',
        padding: variant === 'pill' ? '9px 18px' : '0 0 12px',
        borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
        background: variant === 'pill' && active ? 'var(--ink-900)' : 'transparent',
        color: active ? variant === 'pill' ? 'var(--crema-50)' : 'var(--text-display)' : 'var(--text-muted)',
        boxShadow: variant === 'pill' && active ? 'var(--shadow-sm)' : 'none',
        borderBottom: variant === 'underline' ? '2px solid ' + (active ? 'var(--accent-primary)' : 'transparent') : 'none',
        marginBottom: variant === 'underline' ? -1 : 0,
        transition: 'all var(--dur-fast) var(--ease-boutique)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-club/AppScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Card,
  Tag,
  Tabs,
  Input,
  Switch,
  QuantityStepper,
  ProductCard,
  Toast
} = window.CookieCoDesignSystem_9ccd72;
const LOTES = [{
  id: 1,
  name: 'Reserva de autor',
  note: 'Lote 04 · 20 piezas',
  price: '48,00 €',
  badge: 'Club'
}, {
  id: 2,
  name: 'Café & cardamomo',
  note: 'Caja de 12',
  price: '34,00 €'
}, {
  id: 3,
  name: 'Miel & sal negra',
  note: 'Caja de 6',
  price: '18,00 €'
}];
function StatusBar({
  inverse
}) {
  const c = inverse ? 'var(--crema-50)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px 4px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", null, "21:04"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 13,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 13,
    color: c
  })));
}
function Phone({
  inverse,
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      height: 700,
      borderRadius: 44,
      padding: 10,
      background: 'var(--ink-900)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 35,
      overflow: 'hidden',
      position: 'relative',
      background: inverse ? 'var(--ink-900)' : 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, label));
}
function TabBar({
  tab,
  setTab
}) {
  const items = [['club', 'sparkles', 'Club'], ['lotes', 'package', 'Lotes'], ['pedido', 'truck', 'Pedido'], ['perfil', 'user-round', 'Tú']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      padding: '10px 12px 22px',
      gap: 4,
      background: 'rgba(18,15,13,.86)',
      backdropFilter: 'var(--blur-glass)',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, items.map(([v, ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setTab(v),
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'grid',
      justifyItems: 'center',
      gap: 5,
      padding: '8px 0',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: tab === v ? 'var(--lila-300)' : 'rgba(253,250,245,.5)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      color: tab === v ? 'var(--crema-50)' : 'rgba(253,250,245,.5)'
    }
  }, l))));
}
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--grad-nocturno)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      alignContent: 'center',
      gap: 18,
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--crema-50)',
      lineHeight: 1.05
    }
  }, "Cookie", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lila-300)'
    }
  }, ".co")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)'
    }
  }, "Entra con el c\xF3digo de tu tarjeta de socio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "C\xF3digo de socio",
    defaultValue: "CLUB-2026",
    style: {
      color: 'var(--text-body)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    fullWidth: true,
    onClick: onEnter
  }, "Entrar al Club"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    style: {
      color: 'var(--crema-50)'
    }
  }, "Pedir invitaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px 34px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-inverse-muted)'
    }
  }, "Doce socios nuevos al mes."));
}
function ClubHome({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 28px',
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--lila-300)'
    }
  }, "SOCIA \xB7 MESA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--crema-50)',
      lineHeight: 1.1
    }
  }, "Buenas noches, Ana")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "soft",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    }),
    label: "Avisos"
  })), /*#__PURE__*/React.createElement(Card, {
    surface: "glass",
    elevation: "lg",
    padding: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 10,
      background: 'rgba(253,250,245,.08)',
      border: '1px solid rgba(255,255,255,.16)',
      color: 'var(--crema-50)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Cata \xB7 jueves 21:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26
    }
  }, "Cacao de Chiapas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)'
    }
  }, "Seis plazas libres en el obrador de Barquillo."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    style: {
      justifySelf: 'start',
      marginTop: 6
    }
  }, "Reservar plaza")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--crema-50)'
    }
  }, "Esta semana"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-inverse-muted)'
    }
  }, "3 lotes")), LOTES.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr auto',
      gap: 14,
      alignItems: 'center',
      padding: 12,
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(253,250,245,.05)',
      border: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(196,174,226,.22)',
      boxShadow: 'var(--shadow-inset-sheen)',
      transform: 'perspective(700px) rotateY(-10deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      color: 'var(--crema-50)'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-inverse-muted)'
    }
  }, l.note), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--lila-300)'
    }
  }, l.price)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "soft",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus"
    }),
    label: 'Añadir ' + l.name,
    onClick: () => onAdd(l)
  }))))));
}
function Lotes({
  onAdd
}) {
  const [filter, setFilter] = React.useState('Todo');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 28px',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: 0
    }
  }, "Lotes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflow: 'auto'
    }
  }, ['Todo', 'Autor', 'Clásicas', 'Sin gluten'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, LOTES.map(l => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: l.id
  }, l, {
    onAdd: () => onAdd(l)
  }))))));
}
function Pedido() {
  const pasos = [['check', 'Amasado', '06:10', true], ['check', 'Horneado', '08:35', true], ['package', 'En caja', '10:02', true], ['truck', 'En reparto', '—', false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 28px',
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "PEDIDO #2611"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: '6px 0 0'
    }
  }, "Llega a las 19:40")), /*#__PURE__*/React.createElement(Card, {
    surface: "vitrina",
    elevation: "md",
    padding: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22
    }
  }, "Reserva de autor \xB7 Lote 04"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "2 cajas \xB7 mensajer\xEDa propia"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'rgba(255,255,255,.6)',
      overflow: 'hidden',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '74%',
      height: '100%',
      background: 'var(--morado-600)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, pasos.map(([ic, t, h, done], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '36px 1fr auto',
      gap: 12,
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: i < pasos.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      opacity: done ? 1 : .45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: done ? 'var(--lila-100)' : 'var(--crema-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: done ? 'var(--morado-600)' : 'var(--text-faint)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, h)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Hablar con el obrador")));
}
function Perfil() {
  const [avisos, setAvisos] = React.useState(true);
  const [auto, setAuto] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 28px',
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: 0
    }
  }, "Ana Ferrer"), /*#__PURE__*/React.createElement(Card, {
    surface: "nocturno",
    elevation: "md",
    padding: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--lila-300)'
    }
  }, "TARJETA DE SOCIA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28
    }
  }, "Mesa"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-inverse-muted)'
    }
  }, "CLUB-2026 \xB7 desde marzo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: avisos,
    onChange: () => setAvisos(!avisos),
    label: "Avisos de horneado"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: () => setAuto(!auto),
    label: "Renovar el Club cada mes"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, [['map-pin', 'Direcciones'], ['credit-card', 'Pagos'], ['gift', 'Invitar a alguien'], ['life-buoy', 'Ayuda']].map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15
    }
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-faint)"
  }))))));
}
Object.assign(window, {
  Phone,
  StatusBar,
  TabBar,
  Login,
  ClubHome,
  Lotes,
  Pedido,
  Perfil,
  LOTES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-club/AppScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-boutique/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Tag
} = window.CookieCoDesignSystem_9ccd72;
function Wordmark({
  inverse
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      letterSpacing: '-.02em',
      color: inverse ? 'var(--crema-50)' : 'var(--ink-900)'
    }
  }, "Cookie", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--lila-300)' : 'var(--morado-600)'
    }
  }, ".co"));
}
function ModeToggle({
  mode,
  setMode
}) {
  const opts = [['vitrina', 'Vitrina'], ['club', 'Club']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: mode === 'club' ? 'rgba(253,250,245,.10)' : 'var(--crema-100)',
      border: mode === 'club' ? '1px solid var(--border-inverse)' : '1px solid transparent'
    }
  }, opts.map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setMode(v),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      background: mode === v ? mode === 'club' ? 'var(--crema-50)' : 'var(--ink-900)' : 'transparent',
      color: mode === v ? mode === 'club' ? 'var(--ink-900)' : 'var(--crema-50)' : mode === 'club' ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      transition: 'all var(--dur-fast) var(--ease-boutique)'
    }
  }, l)));
}
function Header({
  mode,
  setMode,
  cart,
  onCart,
  onNav,
  view
}) {
  const inverse = mode === 'club';
  const link = (id, label) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: view === id ? 700 : 500,
      color: inverse ? view === id ? 'var(--crema-50)' : 'var(--text-inverse-muted)' : view === id ? 'var(--ink-900)' : 'var(--text-muted)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '18px var(--gutter-page-lg)',
      backdropFilter: 'var(--blur-glass)',
      background: inverse ? 'rgba(18,15,13,.72)' : 'rgba(253,250,245,.78)',
      borderBottom: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)')
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: inverse
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      marginLeft: 10
    }
  }, link('home', 'Inicio'), link('catalogo', 'Catálogo'), link('club', 'El Club')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode,
    setMode: setMode
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: inverse ? 'ghost' : 'ghost',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      color: inverse ? 'var(--crema-50)' : 'var(--ink-900)'
    }),
    label: "Buscar"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onCart,
    variant: inverse ? 'inverse' : 'secondary',
    style: inverse ? {
      background: 'var(--crema-50)',
      color: 'var(--ink-900)',
      border: 'none'
    } : undefined,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag"
    }),
    label: "Caja"
  }), cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      padding: '0 6px',
      borderRadius: 999,
      background: 'var(--morado-600)',
      color: 'var(--crema-50)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      display: 'grid',
      placeItems: 'center',
      pointerEvents: 'none'
    }
  }, cart)));
}
function Footer({
  inverse
}) {
  const cols = [['Boutique', ['Catálogo', 'Ediciones limitadas', 'Regalo', 'Tarjeta regalo']], ['El Club', ['Cómo funciona', 'Niveles', 'Catas', 'Invitar']], ['Casa', ['Obrador', 'Ingredientes', 'Trabaja con nosotros', 'Contacto']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '64px var(--gutter-page-lg) 40px',
      background: inverse ? 'var(--ink-900)' : 'var(--crema-100)',
      borderTop: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: inverse
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: '34ch'
    }
  }, "Obrador y club de galletas. Horneamos la ma\xF1ana del env\xEDo; lo que no sale del horno, no se vende.")), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--crema-50)' : 'var(--ink-900)'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 14
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Cookie.co"), /*#__PURE__*/React.createElement("span", null, "Madrid \xB7 Lisboa")));
}
Object.assign(window, {
  Wordmark,
  ModeToggle,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-boutique/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-boutique/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Tag,
  Card,
  ProductCard,
  QuantityStepper,
  Input,
  Select,
  Checkbox,
  Radio,
  Tabs,
  Toast
} = window.CookieCoDesignSystem_9ccd72;
const CATALOGO = [{
  id: 1,
  name: 'Miel & sal negra',
  note: 'Caja de 6 · mantequilla tostada',
  price: '18,00 €',
  badge: 'Nuevo'
}, {
  id: 2,
  name: 'Cacao 72%',
  note: 'Caja de 12 · chocolate de origen',
  price: '32,00 €'
}, {
  id: 3,
  name: 'Avellana & romero',
  note: 'Caja de 6 · temporada',
  price: '19,50 €',
  badge: 'Últimas'
}, {
  id: 4,
  name: 'Pistacho de Bronte',
  note: 'Caja de 6',
  price: '22,00 €'
}, {
  id: 5,
  name: 'Café & cardamomo',
  note: 'Caja de 12',
  price: '34,00 €'
}, {
  id: 6,
  name: 'Reserva de autor',
  note: 'Solo Club · lote de 20',
  price: '48,00 €',
  badge: 'Club',
  tone: 'nocturno'
}];
function Hero({
  mode,
  onShop
}) {
  const club = mode === 'club';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '96px var(--gutter-page-lg) 88px',
      background: club ? 'var(--grad-nocturno)' : 'var(--grad-vitrina)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: club ? 'var(--lila-300)' : 'var(--morado-600)'
    }
  }, club ? 'Acceso por invitación' : 'Horneado hoy · Madrid'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 76,
      lineHeight: 1.02,
      letterSpacing: '-.02em',
      margin: 0,
      color: club ? 'var(--crema-50)' : 'var(--ink-900)'
    }
  }, club ? /*#__PURE__*/React.createElement(React.Fragment, null, "La misma casa,", /*#__PURE__*/React.createElement("br", null), "despu\xE9s de cerrar.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Galletas de", /*#__PURE__*/React.createElement("br", null), "obrador, a las 4 h.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontSize: 17,
      lineHeight: 1.6,
      color: club ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, club ? 'Lotes de autor, catas mensuales y piezas que nunca llegan a la vitrina. Doce socios nuevos al mes.' : 'Cada caja sale del horno la mañana del envío y llega el mismo día en Madrid. Nada congelado, nada de ayer.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: club ? 'inverse' : 'primary',
    onClick: onShop,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, club ? 'Solicitar invitación' : 'Ver el catálogo'), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: club ? 'ghost' : 'secondary',
    style: club ? {
      color: 'var(--crema-50)',
      border: '1px solid var(--border-inverse)'
    } : undefined
  }, "C\xF3mo horneamos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: club ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "4 h \xB7 entrega"), /*#__PURE__*/React.createElement("span", null, "20 \xB7 piezas por lote"), /*#__PURE__*/React.createElement("span", null, "0 \xB7 conservantes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      perspective: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '78%',
      aspectRatio: '1',
      borderRadius: 'var(--radius-2xl)',
      background: club ? 'rgba(253,250,245,.08)' : 'rgba(255,255,255,.62)',
      border: '1px solid ' + (club ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.7)'),
      boxShadow: 'var(--shadow-xl), var(--shadow-inset-sheen)',
      transform: 'rotateX(8deg) rotateY(-12deg)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '62%',
      aspectRatio: '1',
      borderRadius: 'var(--radius-xl)',
      background: club ? 'rgba(196,174,226,.18)' : 'rgba(239,228,211,.9)',
      boxShadow: 'var(--shadow-lg), var(--shadow-inset-sheen)',
      transform: 'translateZ(40px)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: club ? 'var(--crema-50)' : 'var(--ink-800)'
    }
  }, club ? 'Reserva' : 'Caja nº 04'))))));
}
function Catalogo({
  mode,
  onAdd,
  filter,
  setFilter,
  title = 'El catálogo',
  compact = false
}) {
  const club = mode === 'club';
  const items = club ? CATALOGO : CATALOGO.filter(i => i.tone !== 'nocturno');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: compact ? '56px var(--gutter-page-lg)' : '80px var(--gutter-page-lg)',
      background: club ? 'var(--ink-900)' : 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: club ? 'var(--lila-300)' : 'var(--morado-600)'
    }
  }, club ? 'Lotes de socio' : 'Disponible hoy'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: '10px 0 0',
      color: club ? 'var(--crema-50)' : 'var(--ink-900)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Todo', 'Clásicas', 'Temporada', 'Sin gluten'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t),
    style: club && filter !== t ? {
      color: 'var(--text-inverse-muted)',
      borderColor: 'var(--border-inverse)'
    } : undefined
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p)
  }))))));
}
function Manifiesto({
  mode
}) {
  const club = mode === 'club';
  const pasos = [['sunrise', '06:00', 'Se amasa', 'Mantequilla de Normandía, harina molida a piedra.'], ['flame', '08:30', 'Se hornea', 'Tandas de veinte, una sola vez al día.'], ['package', '10:00', 'Se cierra', 'Caja sellada en frío, sin plástico.'], ['truck', '14:00', 'Llega', 'Mensajería propia dentro de la M-30.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--gutter-page-lg)',
      background: club ? 'var(--ink-800)' : 'var(--crema-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: '0 0 32px',
      color: club ? 'var(--crema-50)' : 'var(--ink-900)'
    }
  }, "Un d\xEDa en el obrador"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, pasos.map(([ic, h, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    surface: club ? 'nocturno' : 'plain',
    elevation: "sm",
    padding: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: club ? 'var(--lila-300)' : 'var(--morado-600)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: club ? 'var(--text-inverse-muted)' : 'var(--text-faint)'
    }
  }, h), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      lineHeight: 1.2
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: club ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, d))))));
}
function ClubPitch({
  onJoin
}) {
  const niveles = [['Vitrina', 'Gratis', 'Pedidos, avisos de horneado y lista de espera.'], ['Socio', '14 € / mes', 'Una caja al mes, acceso a lotes de autor y catas.'], ['Mesa', '38 € / mes', 'Dos cajas, cata mensual en el obrador y piezas fuera de carta.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px var(--gutter-page-lg)',
      background: 'var(--grad-nocturno)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--lila-300)'
    }
  }, "La segunda experiencia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 58,
      margin: 0,
      color: 'var(--crema-50)'
    }
  }, "El Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)'
    }
  }, "La boutique cierra a las 20:00. A partir de ah\xED existe otra carta, otra sala y otra lista.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, niveles.map(([n, p, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    surface: i === 1 ? 'glass' : 'nocturno',
    elevation: i === 1 ? 'lg' : 'sm',
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26
    }
  }, n), i === 1 && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "M\xE1s elegido")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15
    }
  }, p), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: i === 1 ? 'var(--text-muted)' : 'var(--text-inverse-muted)'
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: i === 1 ? 'primary' : 'ghost',
    fullWidth: true,
    onClick: onJoin,
    style: i !== 1 ? {
      color: 'var(--crema-50)',
      border: '1px solid var(--border-inverse)'
    } : undefined
  }, "Elegir"))))));
}
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onCheckout
}) {
  if (!open) return null;
  const total = items.reduce((s, i) => s + i.qty * parseFloat(i.price.replace(',', '.')), 0);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 440,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      margin: 0
    }
  }, "Tu caja"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    }),
    label: "Cerrar",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 28px',
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "Todav\xEDa no has elegido nada."), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      background: 'var(--grad-vitrina)',
      boxShadow: 'var(--shadow-inset-sheen)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18
    }
  }, i.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, i.price)), /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: i.qty,
    min: 0,
    onChange: v => onQty(i.id, v)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px 28px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 14,
      background: 'var(--crema-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, total.toFixed(2).replace('.', ','), " \u20AC")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: items.length === 0,
    onClick: onCheckout
  }, "Ir al pago"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Entrega hoy en Madrid si pides antes de las 12:00."))));
}
function Checkout({
  items,
  onBack,
  onDone
}) {
  const [envio, setEnvio] = React.useState('boutique');
  const total = items.reduce((s, i) => s + i.qty * parseFloat(i.price.replace(',', '.')), 0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px var(--gutter-page-lg) 96px',
      background: 'var(--surface-page)',
      minHeight: '60vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.3fr .9fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      justifySelf: 'start',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u2190 Seguir mirando"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: 0
    }
  }, "Pago"), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    defaultValue: "Ana Ferrer"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    defaultValue: "ana@correo.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Ventana de entrega",
    options: [{
      value: 'a',
      label: 'Hoy, 18:00–20:00'
    }, {
      value: 'b',
      label: 'Mañana, 9:00–11:00'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Entrega"), /*#__PURE__*/React.createElement(Radio, {
    asCard: true,
    name: "envio",
    label: "Recoger en boutique",
    description: "Gratis \xB7 listo en 2 h \xB7 Calle Barquillo 14",
    checked: envio === 'boutique',
    onChange: () => setEnvio('boutique')
  }), /*#__PURE__*/React.createElement(Radio, {
    asCard: true,
    name: "envio",
    label: "Mensajer\xEDa propia",
    description: "4,00 \u20AC \xB7 mismo d\xEDa dentro de la M-30",
    checked: envio === 'moto',
    onChange: () => setEnvio('moto')
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Envolver para regalo",
    description: "+3,00 \u20AC \xB7 caja lila con nota escrita a mano"
  }))), /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 14,
      alignContent: 'start',
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26
    }
  }, "Resumen"), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, i.qty, " \xD7 ", i.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, i.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, (total + (envio === 'moto' ? 4 : 0)).toFixed(2).replace('.', ','), " \u20AC")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onDone
  }, "Confirmar pedido"))));
}
Object.assign(window, {
  CATALOGO,
  Hero,
  Catalogo,
  Manifiesto,
  ClubPitch,
  CartDrawer,
  Checkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-boutique/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
