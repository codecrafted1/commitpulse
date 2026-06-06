'use client';
'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype);
    return (
      (g.next = verb(0)),
      (g['throw'] = verb(1)),
      (g['return'] = verb(2)),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import * as tracking_1 from '@/utils/tracking';
import * as link_1 from 'next/link';
import * as react_1 from 'react';
import * as framer_motion_1 from 'framer-motion';
import * as gsap_1 from 'gsap';
import * as react_2 from '@gsap/react';
import * as lucide_react_1 from 'lucide-react';
import * as commitpulse_logo_1 from '@/components/commitpulse-logo';
import * as CustomizeCTA_1 from './components/CustomizeCTA';
import * as useRecentSearches_1 from '@/hooks/useRecentSearches';
import * as useDebounce_1 from '@/hooks/useDebounce';
import * as Footer_1 from '@/app/components/Footer';
import * as FeatureCards_1 from '@/components/FeatureCards';
import * as DiscordButton_1 from '@/components/DiscordButton';
import * as WallOfLove_1 from '@/components/WallOfLove';
import * as validations_1 from '@/lib/validations';
var Icons = {
  Github: function () {
    return (
      <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  },
  Copy: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    );
  },
  Zap: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2 Z" />
      </svg>
    );
  },
  Box: function () {
    return <commitpulse_logo_1.CommitPulseLogo className="h-6 w-6" />;
  },
  Check: function () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  },
};
function CountUp(_a) {
  var value = _a.value,
    _b = _a.duration,
    duration = _b === void 0 ? 1000 : _b;
  var _c = (0, react_1.useState)(0),
    count = _c[0],
    setCount = _c[1];
  (0, react_1.useEffect)(
    function () {
      var start = 0;
      var end = value;
      if (start === end) {
        // Safe: early-exit guard when the value hasn't changed — avoids scheduling
        // a setInterval just to immediately clear it. No stale-dependency risk
        // because `value` is the only dep and this path reads it synchronously.

        setCount(end);
        return;
      }
      var totalMilliseconds = duration;
      var startTime = Date.now();
      var timer = setInterval(function () {
        var elapsed = Date.now() - startTime;
        var progress = Math.min(elapsed / totalMilliseconds, 1);
        var easedProgress = progress * (2 - progress);
        var current = Math.floor(easedProgress * end);
        setCount(current);
        if (progress >= 1) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);
      return function () {
        return clearInterval(timer);
      };
    },
    [value, duration]
  );
  return <span>{count.toLocaleString()}</span>;
}
function SampleBadgePreview() {
  var cols = 14;
  var rows = 7;
  var towers = [];
  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      var hash = (c * 7 + r * 13) % 19;
      var isActive = hash % 3 === 0 && (c + r) % 2 === 0;
      var height = isActive ? Math.round(15 + hash * 3.5) : 4;
      towers.push({ col: c, row: r, height: height, isActive: isActive });
    }
  }
  var originX = 300;
  var originY = 110;
  var tileHalfWidth = 16;
  var tileHalfHeight = 10;
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-6 relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-30 blur-xl" />

      <svg
        viewBox="0 0 600 320"
        className="w-full max-w-[700px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] cp-svg-container relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sample-tower-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0d1117" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="sample-tower-grad-alt" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0d1117" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>
          <filter id="sample-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect
          width="600"
          height="320"
          rx="16"
          fill="#0d1117"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />

        <text
          x="300"
          y="45"
          textAnchor="middle"
          fill="#c9d1d9"
          style={{
            fontFamily: '"Syncopate", sans-serif',
            fontSize: '12px',
            letterSpacing: '6px',
            fontWeight: 400,
            opacity: 0.6,
          }}
        >
          PREVIEW MONOLITH
        </text>

        <line
          x1="100"
          y1="65"
          x2="500"
          y2="65"
          stroke="rgba(16,185,129,0.2)"
          strokeWidth="2"
          filter="url(#sample-glow)"
        >
          <animate attributeName="y1" values="65;240;65" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="65;240;65" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="65" x2="500" y2="65" stroke="rgba(16,185,129,0.4)" strokeWidth="1">
          <animate attributeName="y1" values="65;240;65" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="65;240;65" dur="6s" repeatCount="indefinite" />
        </line>

        <g transform="translate(0, 20)">
          {towers.map(function (t, idx) {
            var x = originX + (t.col - t.row) * tileHalfWidth;
            var y = originY + (t.col + t.row) * tileHalfHeight;
            var h = t.height;
            var leftPath = 'M 0 '.concat(10 - h, ' L 0 10 L -16 0 L -16 ').concat(-h, ' Z');
            var rightPath = 'M 0 '.concat(10 - h, ' L 0 10 L 16 0 L 16 ').concat(-h, ' Z');
            var topPath = 'M 0 '
              .concat(-h, ' L 16 ')
              .concat(10 - h, ' L 0 ')
              .concat(20 - h, ' L -16 ')
              .concat(10 - h, ' Z');
            var grad =
              (t.col + t.row) % 3 === 0 ? 'url(#sample-tower-grad-alt)' : 'url(#sample-tower-grad)';
            var topColor = (t.col + t.row) % 3 === 0 ? '#06b6d4' : '#10b981';
            if (!t.isActive) {
              return (
                <g key={idx} transform={'translate('.concat(x, ', ').concat(y, ')')}>
                  <path
                    d={leftPath}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                  <path
                    d={rightPath}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                  <path d={topPath} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                </g>
              );
            }
            return (
              <g key={idx} transform={'translate('.concat(x, ', ').concat(y, ')')}>
                <path d={leftPath} fill={grad} fillOpacity="0.6" />
                <path d={rightPath} fill={grad} fillOpacity="0.75" />
                <path d={topPath} fill={topColor} fillOpacity="0.85" />
              </g>
            );
          })}
        </g>

        <path
          d={'M '
            .concat(originX - 14 * 16, ' ')
            .concat(originY + 14 * 10 + 20, ' L ')
            .concat(originX, ' ')
            .concat(originY + 20, ' L ')
            .concat(originX + 14 * 16, ' ')
            .concat(originY + 14 * 10 + 20)}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </svg>

      <div className="text-center max-w-md relative z-10 px-4">
        <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
          Interactive Monolith Preview
        </h4>
        <p className="text-xs text-zinc-400 leading-relaxed">
          CommitPulse compiles your public GitHub contribution history into a customizable 3D city.
          The taller the towers, the more you committed that day. Enter a GitHub username above to
          instantly generate your streak badge.
        </p>
      </div>
    </div>
  );
}
function LandingPage() {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var _this = this;
  var _a, _b, _c, _d, _e, _f, _g, _h;
  var getDisplayUsername = function (name) {
    if (name.includes('github.com/')) {
      var parts = name.split('github.com/');
      if (parts[1]) {
        var pathParts = parts[1].split('?')[0].split('/');
        var userPart = pathParts.find(function (p) {
          return p.trim().length > 0;
        });
        if (userPart) return userPart;
      }
    }
    return name;
  };
  var _j = (0, react_1.useState)(''),
    username = _j[0],
    setUsername = _j[1];
  var _k = (0, react_1.useState)(''),
    instantUsername = _k[0],
    setInstantUsername = _k[1];
  var _l = (0, react_1.useState)(false),
    copied = _l[0],
    setCopied = _l[1];
  var _m = (0, react_1.useState)(null),
    badgeResult = _m[0],
    setBadgeResult = _m[1];
  var guideRef = (0, react_1.useRef)(null);
  var heroRef = (0, react_1.useRef)(null);
  var _o = (0, useRecentSearches_1.useRecentSearches)(),
    searches = _o.searches,
    addSearch = _o.addSearch,
    clearSearches = _o.clearSearches,
    removeSearch = _o.removeSearch;
  var _p = (0, react_1.useState)(false),
    mounted = _p[0],
    setMounted = _p[1];
  // States for user profile details loading
  var _q = (0, react_1.useState)(null),
    userDetails = _q[0],
    setUserDetails = _q[1];
  var _r = (0, react_1.useState)(false),
    userDetailsLoading = _r[0],
    setUserDetailsLoading = _r[1];
  var _s = (0, react_1.useState)(null),
    userDetailsError = _s[0],
    setUserDetailsError = _s[1];
  // SSR hydration guard: server and client both render with mounted=false so
  // their initial output matches. After hydration this effect runs once,
  // setting mounted=true so client-only UI (form button, validation hints)
  // becomes interactive without a flash of mismatched content.
  (0, react_1.useEffect)(function () {
    setMounted(true);
  }, []);
  (0, react_2.useGSAP)(
    function () {
      if (!heroRef.current) return;
      gsap_1.gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.15,
      });
      gsap_1.gsap.to('.contribution-text', {
        backgroundPosition: '300% 50%',
        duration: 8,
        ease: 'none',
        repeat: -1,
      });
    },
    { scope: heroRef }
  );
  var trimmedUsername = username.trim();
  var debouncedUsername = (0, useDebounce_1.useDebounce)(trimmedUsername, 500);
  // Active username used to load the badge
  var previewUsername = instantUsername || debouncedUsername;
  var hasUsername = previewUsername.length > 0;
  var badgeUrl = '/api/streak?user='.concat(previewUsername);
  var siteUrl =
    (_a = process.env.NEXT_PUBLIC_SITE_URL) !== null && _a !== void 0
      ? _a
      : 'https://commitpulse.vercel.app';
  var markdown = '![CommitPulse]('
    .concat(siteUrl, '/api/streak?user=')
    .concat(trimmedUsername, ')');
  var DownloadSVG = function () {
    var link = document.createElement('a');
    link.href = badgeUrl;
    link.download = ''.concat(debouncedUsername, '-commitpulse-badge.svg');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  var badgeLoaded =
    (badgeResult === null || badgeResult === void 0 ? void 0 : badgeResult.username) ===
      previewUsername &&
    (badgeResult === null || badgeResult === void 0 ? void 0 : badgeResult.status) === 'loaded';
  var badgeError =
    (badgeResult === null || badgeResult === void 0 ? void 0 : badgeResult.username) ===
      previewUsername &&
    (badgeResult === null || badgeResult === void 0 ? void 0 : badgeResult.status) === 'error';
  // Fetch lightweight user profile details and stats on debounced input change
  (0, react_1.useEffect)(
    function () {
      if (!mounted) return;
      if (debouncedUsername.length === 0) {
        // Safe: synchronous reset of derived UI state when the input is cleared.
        // These three setters always run together so there is no intermediate
        // render with inconsistent state, and no async work is in flight.

        setUserDetails(null);
        setUserDetailsError(null);
        setUserDetailsLoading(false);
        return;
      }
      if (!(0, validations_1.validateGitHubUsername)(debouncedUsername)) {
        setUserDetails(null);
        setUserDetailsError('Invalid username format');
        setUserDetailsLoading(false);
        return;
      }
      var fetchDetails = function () {
        return __awaiter(_this, void 0, void 0, function () {
          var response, errData, data, err_1, message;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                setUserDetailsLoading(true);
                setUserDetailsError(null);
                _a.label = 1;
              case 1:
                _a.trys.push([1, 6, 7, 8]);
                return [
                  4 /*yield*/,
                  fetch(
                    '/api/user-details?username='.concat(encodeURIComponent(debouncedUsername))
                  ),
                ];
              case 2:
                response = _a.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                if (response.status === 404) {
                  throw new Error('User not found');
                }
                return [4 /*yield*/, response.json()];
              case 3:
                errData = _a.sent();
                throw new Error(errData.error || 'Failed to fetch user');
              case 4:
                return [4 /*yield*/, response.json()];
              case 5:
                data = _a.sent();
                setUserDetails(data);
                return [3 /*break*/, 8];
              case 6:
                err_1 = _a.sent();
                message = err_1 instanceof Error ? err_1.message : 'Failed to fetch user';
                setUserDetails(null);
                setUserDetailsError(message);
                return [3 /*break*/, 8];
              case 7:
                setUserDetailsLoading(false);
                return [7 /*endfinally*/];
              case 8:
                return [2 /*return*/];
            }
          });
        });
      };
      fetchDetails();
    },
    [debouncedUsername, mounted]
  );
  var copyToClipboard = function () {
    return __awaiter(_this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (trimmedUsername.length === 0) return [2 /*return*/];
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, , 4]);
            return [4 /*yield*/, navigator.clipboard.writeText(markdown)];
          case 2:
            _b.sent();
            return [3 /*break*/, 4];
          case 3:
            _a = _b.sent();
            setCopied(false);
            return [2 /*return*/];
          case 4:
            (0, tracking_1.trackUser)(trimmedUsername);
            addSearch(trimmedUsername);
            setCopied(true);
            setTimeout(function () {
              var _a;
              (_a = guideRef.current) === null || _a === void 0
                ? void 0
                : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
            setTimeout(function () {
              return setCopied(false);
            }, 3000);
            return [2 /*return*/];
        }
      });
    });
  };
  var selectDemoUser = function (name) {
    setUsername(name);
    setInstantUsername(name);
  };
  var handleGenerate = function (e) {
    e.preventDefault();
    if (trimmedUsername.length > 0) {
      setInstantUsername(trimmedUsername);
      (0, tracking_1.trackUser)(trimmedUsername);
      addSearch(trimmedUsername);
    }
  };
  // 4 Premium statistics cards schema
  var statsData = [
    {
      label: 'Current Streak',
      value:
        (_c =
          (_b = userDetails === null || userDetails === void 0 ? void 0 : userDetails.stats) ===
            null || _b === void 0
            ? void 0
            : _b.currentStreak) !== null && _c !== void 0
          ? _c
          : previewUsername
            ? 0
            : 12,
      icon: lucide_react_1.Flame,
      color: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/20',
      glow: 'shadow-orange-500/10',
      unit: 'days',
    },
    {
      label: 'Longest Streak',
      value:
        (_e =
          (_d = userDetails === null || userDetails === void 0 ? void 0 : userDetails.stats) ===
            null || _d === void 0
            ? void 0
            : _d.longestStreak) !== null && _e !== void 0
          ? _e
          : previewUsername
            ? 0
            : 34,
      icon: lucide_react_1.Trophy,
      color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-yellow-500/20',
      glow: 'shadow-yellow-500/10',
      unit: 'days',
    },
    {
      label: 'Contributions',
      value:
        (_g =
          (_f = userDetails === null || userDetails === void 0 ? void 0 : userDetails.stats) ===
            null || _f === void 0
            ? void 0
            : _f.totalContributions) !== null && _g !== void 0
          ? _g
          : previewUsername
            ? 0
            : 420,
      icon: lucide_react_1.GitCommit,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20',
      glow: 'shadow-emerald-500/10',
      unit: 'commits',
    },
    {
      label: 'Repositories',
      value:
        (_h =
          userDetails === null || userDetails === void 0 ? void 0 : userDetails.public_repos) !==
          null && _h !== void 0
          ? _h
          : previewUsername
            ? 0
            : 24,
      icon: lucide_react_1.Folder,
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/20',
      glow: 'shadow-cyan-500/10',
      unit: 'repos',
    },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent font-sans text-black dark:text-white selection:bg-black/20 dark:selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[30%] w-[30%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 mt-32">
        <div className="mb-16 text-center">
          <DiscordButton_1.DiscordButton />

          <div ref={heroRef}>
            <h1 className="hero-text opacity-0 translate-y-10 mb-8 bg-gradient-to-br from-gray-900 via-black to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-500 bg-clip-text text-transparent text-5xl font-black tracking-tighter md:text-8xl pb-2">
              Elevate Your <br />{' '}
              <span className="contribution-text inline-block bg-[length:300%_300%] bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Contribution
              </span>{' '}
              Story.
            </h1>
          </div>

          <framer_motion_1.motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-600 dark:text-white/65 md:text-xl "
          >
            CommitPulse converts your GitHub commit history into a live, 3D animated badge. The more
            you commit, the taller your city grows! Embed it in your profile README with one line.
          </framer_motion_1.motion.p>
        </div>

        <section className="mx-auto mb-16 max-w-4xl relative z-20">
          <div className="rounded-3xl border border-black/5 bg-white/60 p-4 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/80 dark:shadow-2xl dark:shadow-black/50 md:p-8">
            <form onSubmit={handleGenerate} className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative flex-1 flex items-center">
                  <span className="absolute left-4 text-zinc-400 dark:text-zinc-500">
                    <lucide_react_1.Search size={18} />
                  </span>
                  <input
                    type="text"
                    suppressHydrationWarning
                    placeholder="Enter GitHub Username"
                    aria-label="Enter GitHub username to generate badge"
                    className="flex-1 rounded-2xl border border-black/10 bg-white pl-12 pr-10 py-4 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent dark:border-white/10 dark:bg-black/60 dark:text-white dark:placeholder:text-gray-500 shadow-inner"
                    value={username}
                    onChange={function (e) {
                      var val = e.target.value;
                      if (val.includes('github.com/')) {
                        var parts = val.split('github.com/');
                        if (parts[1]) {
                          var pathParts = parts[1].split('?')[0].split('/');
                          var userPart = pathParts.find(function (p) {
                            return p.trim().length > 0;
                          });
                          if (userPart) {
                            val = userPart;
                          }
                        }
                      }
                      setUsername(val);
                      setInstantUsername('');
                    }}
                    maxLength={39}
                  />
                  {username.length > 0 ? (
                    <button
                      onClick={function () {
                        setUsername('');
                        setInstantUsername('');
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-black dark:text-white/65 dark:hover:text-white"
                      aria-label="Clear input"
                      type="button"
                    >
                      <lucide_react_1.X size={18} />
                    </button>
                  ) : null}
                </div>

                {/* Primary CTA: Generate Badge */}
                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={!mounted || trimmedUsername.length === 0}
                  aria-label="Generate CommitPulse badge"
                  className={'relative flex min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300 transform cursor-pointer hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed '.concat(
                    mounted && trimmedUsername.length > 0
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:opacity-95'
                      : 'bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-white/55'
                  )}
                >
                  <lucide_react_1.Sparkles size={16} />
                  Generate Badge
                </button>
              </div>

              {/* Inline Validation & Avatar Preview Box */}
              {mounted && (
                <div className="w-full transition-all duration-300">
                  <framer_motion_1.AnimatePresence mode="wait">
                    {username.length === 0 ? (
                      <framer_motion_1.motion.p
                        key="empty-msg"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-zinc-500 text-xs pl-1 flex items-center gap-1.5"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
                        Enter a GitHub username above to copy your badge link.
                      </framer_motion_1.motion.p>
                    ) : !(0, validations_1.validateGitHubUsername)(username.trim()) ? (
                      <framer_motion_1.motion.p
                        key="invalid-format-msg"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-amber-500 text-xs pl-1 flex items-center gap-1.5"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Invalid username format. Usernames can only contain alphanumeric characters
                        and hyphens, and cannot start/end with a hyphen.
                      </framer_motion_1.motion.p>
                    ) : userDetailsLoading ? (
                      <framer_motion_1.motion.div
                        key="loading-skeleton"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-3 py-2 animate-pulse"
                      >
                        <div className="w-6 h-6 rounded-full bg-white/10" />
                        <div className="h-3 w-24 bg-white/10 rounded" />
                        <span className="text-[10px] text-zinc-500 ml-auto">Verifying...</span>
                      </framer_motion_1.motion.div>
                    ) : userDetailsError ? (
                      <framer_motion_1.motion.p
                        key="error-msg"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 text-xs pl-1 flex items-center gap-1.5"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
                        {userDetailsError === 'User not found'
                          ? 'User not found. Check the spelling or confirm if this account exists on GitHub.'
                          : 'Verification failed: '.concat(userDetailsError)}
                      </framer_motion_1.motion.p>
                    ) : userDetails ? (
                      <framer_motion_1.motion.div
                        key="valid-user"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-3 py-2"
                      >
                        <img
                          src={userDetails.avatar_url}
                          alt={userDetails.login}
                          className="w-6 h-6 rounded-full border border-emerald-500/20"
                          onError={function (e) {
                            e.target.src = 'https://github.com/github.png';
                          }}
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-zinc-200">
                            {userDetails.name || userDetails.login}
                          </span>
                          <span className="text-[10px] text-zinc-500">@{userDetails.login}</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full ml-auto flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                          Verified Profile
                        </span>
                      </framer_motion_1.motion.div>
                    ) : null}
                  </framer_motion_1.AnimatePresence>
                </div>
              )}

              {/* Footer Section: Demo & Recents */}
              <div className="flex flex-col gap-3 mt-4 border-t border-zinc-200/5 dark:border-white/5 pt-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[9px]">
                    Demo:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['torvalds', 'gaearon', 'vercel', 'sindresorhus'].map(function (demo) {
                      return (
                        <button
                          key={demo}
                          type="button"
                          onClick={function () {
                            return selectDemoUser(demo);
                          }}
                          className="rounded-full border border-zinc-200/10 bg-zinc-200/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-[11px] text-zinc-600 dark:text-zinc-300 font-semibold px-3 py-1 transition-all duration-300 cursor-pointer"
                        >
                          @{demo}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {searches.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2.5 text-xs mt-1">
                    <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[9px]">
                      Recent:
                    </span>
                    <div className="flex flex-wrap gap-2 items-center">
                      {searches.map(function (s) {
                        var displayName = getDisplayUsername(s);
                        return (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/10 bg-zinc-200/5 dark:border-white/5 dark:bg-[#111] pl-2 pr-1.5 py-1 text-xs text-zinc-700 dark:text-white/70 transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-200/10 dark:hover:bg-white/10 dark:hover:text-white select-none group/pill"
                          >
                            <img
                              src={'https://github.com/'.concat(displayName, '.png?size=40')}
                              alt={displayName}
                              className="w-4 h-4 rounded-full border border-zinc-200/20 dark:border-white/20"
                              onError={function (e) {
                                e.target.src = 'https://github.com/github.png';
                              }}
                            />
                            <button
                              type="button"
                              onClick={function () {
                                return selectDemoUser(displayName);
                              }}
                              className="font-medium cursor-pointer transition-colors hover:text-zinc-950 dark:hover:text-white"
                            >
                              {displayName}
                            </button>
                            <button
                              type="button"
                              onClick={function (e) {
                                e.stopPropagation();
                                removeSearch(s);
                              }}
                              className="rounded-full p-0.5 text-zinc-400 dark:text-white/40 hover:bg-zinc-200/25 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all flex items-center justify-center ml-0.5 cursor-pointer"
                              aria-label={'Remove '.concat(displayName, ' from recent searches')}
                            >
                              <lucide_react_1.X size={10} />
                            </button>
                          </span>
                        );
                      })}
                      <button
                        type="button"
                        onClick={clearSearches}
                        className="text-[10px] text-zinc-500 underline hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer ml-1"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="group relative mt-10">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-50 blur-2xl transition duration-1000 group-hover:opacity-100" />
            <div className="relative flex flex-col min-h-[480px] md:min-h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-black/5 bg-white/50 p-8 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-[#0a0a0a]/80">
              {hasUsername ? (
                <div className="w-full flex flex-col items-center justify-center gap-4">
                  {userDetailsError === 'User not found' ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 shadow-inner">
                        <lucide_react_1.X size={32} className="text-red-500" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                          GitHub user not found
                        </p>
                        <p className="text-sm text-gray-500 dark:text-white/65 mt-1">
                          Please check the username and try again.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {!badgeLoaded && !badgeError && (
                        <div className="h-[240px] w-full max-w-[700px] rounded-2xl bg-black/5 dark:bg-white/5 animate-pulse flex items-center justify-center">
                          <lucide_react_1.Loader2
                            className="animate-spin text-zinc-500"
                            size={32}
                          />
                        </div>
                      )}
                      {badgeError && (
                        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 shadow-inner">
                            <lucide_react_1.X size={32} className="text-red-500" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                              GitHub user not found
                            </p>
                            <p className="text-sm text-gray-500 dark:text-white/65 mt-1">
                              Please check the username and try again.
                            </p>
                          </div>
                        </div>
                      )}
                      <framer_motion_1.motion.img
                        key={badgeUrl}
                        data-testid="badge-img"
                        src={badgeUrl}
                        alt={'CommitPulse badge for '.concat(previewUsername)}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: badgeLoaded ? 1 : 0, scale: badgeLoaded ? 1 : 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-full max-w-[700px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        onLoad={function () {
                          return setBadgeResult({ username: previewUsername, status: 'loaded' });
                        }}
                        onError={function () {
                          return setBadgeResult({ username: previewUsername, status: 'error' });
                        }}
                      />
                      {badgeLoaded && (
                        <button
                          onClick={DownloadSVG}
                          className="mt-6 px-4 py-2 rounded-lg bg-sky-600 text-sm font-medium text-white hover:bg-sky-800 transition-colors"
                        >
                          Download SVG
                        </button>
                      )}
                    </>
                  )}
                </div>
              ) : (
                /* Interactive Empty State */
                <SampleBadgePreview />
              )}

              {/* Animated Stats Cards Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-[700px] mx-auto z-10">
                {statsData.map(function (item) {
                  var IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={'relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md transition-all duration-500 hover:border-white/10 group '.concat(
                        item.glow,
                        ' hover:shadow-lg'
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                          {item.label}
                        </span>
                        <div
                          className={'p-1.5 rounded-lg border bg-gradient-to-br '.concat(
                            item.color
                          )}
                        >
                          <IconComponent size={14} />
                        </div>
                      </div>
                      {userDetailsLoading ? (
                        <div className="h-8 w-20 bg-white/5 animate-pulse rounded-lg mt-1" />
                      ) : (
                        <div className="text-2xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent flex items-baseline gap-1 mt-1 font-mono">
                          <CountUp value={item.value} />
                          <span className="text-[10px] text-zinc-500 font-normal lowercase">
                            {item.unit}
                          </span>
                        </div>
                      )}
                      {!previewUsername && (
                        <div className="absolute top-1 right-2 text-[8px] uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-500/5 border border-emerald-500/10 px-1 rounded-full">
                          Demo
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Secondary CTA Options (Copy Link / Watch Dashboard) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full max-w-[700px] mx-auto z-10">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  disabled={!mounted || trimmedUsername.length === 0}
                  className={'relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed '.concat(
                    mounted && trimmedUsername.length > 0
                      ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400 hover:scale-[1.02] hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] cursor-pointer'
                      : 'border-black/5 bg-gray-50 text-gray-400 dark:border-white/5 dark:bg-transparent dark:text-white/55'
                  )}
                >
                  <framer_motion_1.AnimatePresence mode="wait">
                    {copied ? (
                      <framer_motion_1.motion.div
                        key="check"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Icons.Check /> Copied
                      </framer_motion_1.motion.div>
                    ) : (
                      <framer_motion_1.motion.div
                        key="copy"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <lucide_react_1.Copy size={16} /> Copy Link
                      </framer_motion_1.motion.div>
                    )}
                  </framer_motion_1.AnimatePresence>
                </button>
                <link_1.default
                  href={
                    mounted && trimmedUsername.length > 0
                      ? '/dashboard/'.concat(trimmedUsername)
                      : '/'
                  }
                  suppressHydrationWarning
                  aria-disabled={!mounted || trimmedUsername.length === 0}
                  onClick={function (e) {
                    if (!mounted || trimmedUsername.length === 0) {
                      e.preventDefault();
                    } else {
                      (0, tracking_1.trackUser)(trimmedUsername);
                      addSearch(trimmedUsername);
                    }
                  }}
                  className={'relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] '.concat(
                    mounted && trimmedUsername.length > 0
                      ? 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:scale-[1.02] hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer'
                      : 'border-black/5 bg-gray-50 text-gray-400 dark:border-white/5 dark:bg-transparent dark:text-white/55 cursor-not-allowed'
                  )}
                >
                  <lucide_react_1.ExternalLink size={16} />
                  Watch Dashboard
                </link_1.default>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mx-auto mb-32 max-w-4xl py-12 border-t border-white/5 relative z-20">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-3">
              Workflow
            </p>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tight text-white"
              style={{ fontFamily: '"Syncopate", sans-serif' }}
            >
              How it works
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto mt-4 leading-relaxed">
              Elevating your GitHub profile is a simple 3-step process. Here is how you construct
              your code monument.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 -translate-y-1/2 z-0" />

            {[
              {
                step: '01',
                title: 'Enter Username',
                desc: 'Input your GitHub username above. We validate format and fetch your profile statistics in real-time.',
              },
              {
                step: '02',
                title: 'Generate Badge',
                desc: 'Instantly build your 3D isometric monolith from your commit logs and configure styles to match your README.',
              },
              {
                step: '03',
                title: 'Add to README',
                desc: 'Copy the generated Markdown snippet and embed it into your profile. Your monolith updates as you code.',
              },
            ].map(function (item, idx) {
              return (
                <framer_motion_1.motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl border border-zinc-300 dark:border-white/5 bg-white dark:bg-black/40 backdrop-blur-xl hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-500 group"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-zinc-950 font-bold text-sm tracking-wider text-white shadow-xl group-hover:border-emerald-500/30 transition-all duration-300">
                    <span
                      className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent font-black"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h4
                    className="text-md font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mt-6 mb-3 group-hover:text-emerald-400 transition-colors"
                    style={{ fontFamily: '"Syncopate", sans-serif', fontSize: '12px' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </framer_motion_1.motion.div>
              );
            })}
          </div>
        </section>

        <div ref={guideRef}>
          <framer_motion_1.AnimatePresence>
            {copied && (
              <SuccessGuide
                markdown={markdown}
                username={trimmedUsername}
                onDismiss={function () {
                  return setCopied(false);
                }}
              />
            )}
          </framer_motion_1.AnimatePresence>
        </div>

        <CustomizeCTA_1.CustomizeCTA />

        <FeatureCards_1.FeatureCardsSection>
          <FeatureCards_1.FeatureCard
            icon={<Icons.Zap />}
            accent="text-white"
            accentColor="#10b981"
            index={0}
            title="Real-time Sync"
            desc="Pulled directly from GitHub GraphQL API. Your streak updates as fast as your code pushes."
          />
          <FeatureCards_1.FeatureCard
            icon={<Icons.Copy />}
            accent="text-white"
            accentColor="#8b5cf6"
            index={1}
            title="Theme Engine"
            desc="Switch between Neon, Dracula, or custom HEX modes via simple URL management."
          />
          <FeatureCards_1.FeatureCard
            icon={<Icons.Box />}
            accent="text-white"
            accentColor="#06b6d4"
            index={2}
            title="Isometric Math"
            desc="Sophisticated 3D projection formulas turn 2D data into digital architecture."
          />
        </FeatureCards_1.FeatureCardsSection>

        <WallOfLove_1.WallOfLove />

        <Footer_1.Footer />
      </main>
    </div>
  );
}
var STEPS = [
  {
    n: '01',
    title: 'Open Your Profile Repo',
    body: 'Navigate to github.com/YOUR_USERNAME/YOUR_USERNAME - your special profile repository.',
  },
  {
    n: '02',
    title: 'Edit README.md',
    body: "Click the pencil icon to open the file in GitHub's built-in editor.",
  },
  {
    n: '03',
    title: 'Paste the Snippet',
    body: 'Place your cursor wherever you want the monolith to appear, then paste (Ctrl+V / Cmd+V).',
  },
  {
    n: '04',
    title: 'Save & Ship It',
    body: 'Click "Commit changes" and visit your profile. Your 3D streak is now live.',
  },
];
function SuccessGuide(_a) {
  var markdown = _a.markdown,
    username = _a.username,
    onDismiss = _a.onDismiss;
  return (
    <framer_motion_1.motion.div
      key="success-guide"
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className="mx-auto mb-12 max-w-4xl"
    >
      <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0a0a0a]">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-3/4 -translate-x-1/2 rounded-full bg-white/3 blur-[80px]" />

        <div className="flex items-start justify-between border-b border-black/10 px-8 pb-6 pt-8 dark:border-white/5">
          <div className="flex items-center gap-4">
            <span className="relative mt-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40 opacity-40 dark:bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black dark:bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
            </span>
            <div>
              <p className="mb-0.5 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-[#A1A1AA]">
                Markdown Copied
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-black dark:text-white">
                Your Monolith is Ready - Deploy It in 4 Steps
              </h2>
            </div>
          </div>

          <button
            onClick={onDismiss}
            className="ml-4 mt-1 shrink-0 rounded-xl p-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-black dark:text-white/55 dark:hover:bg-white/5 dark:hover:text-white"
            aria-label="Dismiss guide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="grid gap-px border-b border-black/10 bg-black/5 dark:border-white/5 dark:bg-white/5 sm:grid-cols-2">
          {STEPS.map(function (step, i) {
            return (
              <framer_motion_1.motion.div
                key={step.n}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                className="flex gap-4 bg-white p-6 dark:bg-[#050505]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-100 text-xs font-bold tracking-widest text-gray-600 dark:border-[rgba(255,255,255,0.08)] dark:bg-[#111] dark:text-[#A1A1AA]">
                  {step.n}
                </span>
                <div>
                  <p className="mb-1 text-sm font-bold text-black dark:text-white">{step.title}</p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-500">
                    {step.body}
                  </p>
                </div>
              </framer_motion_1.motion.div>
            );
          })}
        </div>

        <div className="px-8 py-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-white/55">
            Your copied snippet
          </p>
          <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-gray-100 px-4 py-3 font-mono text-sm dark:border-white/8 dark:bg-black/60">
            <span className="shrink-0 select-none text-gray-500 dark:text-[#A1A1AA]">$</span>
            <code className="flex-1 overflow-x-auto break-all leading-relaxed text-black dark:text-white/80">
              {markdown}
            </code>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-gray-500 dark:text-white/55">
            Tip: Add <code className="text-gray-700 dark:text-white/55">?accent=808080</code> to the
            URL to change your monolith&apos;s colour palette.
          </p>
          <div className="mt-8 flex justify-center border-t border-black/10 pt-6 dark:border-white/5">
            <link_1.default
              href={'/dashboard/'.concat(username)}
              onClick={function () {
                return (0, tracking_1.trackUser)(username);
              }}
            >
              <span className="border border-black/10 bg-gray-100 px-6 py-2.5 rounded-lg text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-200 hover:scale-[1.01] active:scale-[0.99] dark:border-[rgba(255,255,255,0.15)] dark:bg-white dark:text-black dark:hover:bg-zinc-100">
                Watch Your Dashboard
              </span>
            </link_1.default>
          </div>
        </div>
      </div>
    </framer_motion_1.motion.div>
  );
}

export default LandingPage;
