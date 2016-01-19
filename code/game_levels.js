var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                     ",
   "                                 x                                              ",
   "                                 x                                              ",
   "                           x     x                                              ",
   "                           x     x                         q                    ",
   "                           x    xxc                                             ",
   "               g           x                                                    ",
   "                           !x                    l                             o",
   "    t                      x                               h          w        x",
   "                           x                                                  xx",
   "  @                   p    x          o              !                       xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],   
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                     x!!!!!!!!!!",
   "     o                                                               x!!!!!!!!!!",
   "    xxx                                                              x!!!!!!!!!!",
   "                                                                     x!!!!!!!!!!",
   "o          o                                                       o x!!!!!!!!!!",
   "x       !          !                                              xxx!!xxxxxxxxx",
   "        x=         x                               xx    = xxxxxxxx!!!x         ",
   "              o                              xx                  x!!!x          ",
   "    x                    x                                       xx!xx          ",
   "   xx                   xx==       xxxxx                          xvxx      x ox",
   "                         x                                           xo      xxx",
   "x              xxxx      x               x   x                       xx      x  ",
   "                         x                                                   x  ",
   " o                       xx               xxx    x                          xx  ",
   "xxxxxxxxxxxxxxxxxx       x               |   |                               x  ",
   "                         x                 o               =     xxxxx       x  ",
   " o                       xxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "xxxxx            xxxx         x   x                  x     x                    ",
   "    x  o         x          o=!!!!x                  x!!!!!x                    ",
   "    xxxxx         x      xxxxxx!!!x                  x!!!!!x                    ",
   "           x            x     xxxxx                  xxxxxxx                    ",
   "  @        x    o      x                                                        ",
   "xxxxxxxxxxxxxxxxxxxxxxxxx                                                       "],   
  ["                                      x!!x                   xxxxxxxxxxxx                                    x!x  ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!x                   xxxxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxxxxxxxxxxxxxxx           xx                                x!x  ",
   "                                o      x!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                      xxxxxxxxxxxxxx   xxxxxxxxxx!!x                        xx                    o   o   o  x!x  ",
   "                      !        xxxxx            xx!xs              o   o    xx                              xx!x  ",
   "                      !         xxx              x!xxx                      xx                xxxxxxxxxxxxxxx!!x  ",
   "                      !          x               xvx               x   x    xxxxxxx        !!!!!!!!!!!!!!!!!!!xx  ",
   "                      !                                      xx  |   |   |  xx    x       xxx!!!xxxxxxxxxxxxxxx   ",
   "                      !                                  xxxxxxx!!!!!!!!!!!xx            v   !!!                  ",
   "                      !                                  x     xxxx!!!!!xxxx                 !!!                  ",
   "           z          !                        x     x   x        xxx!xxx        xxx         xxx                  ",
   "                      !                        x     x               !           x x         x x                  ",
   "                      x                        x     x               !             x     v   x                    ",
   "   p                  x                        x  v  x               !             xx        x                    ",
   "xxxxxxxxx             x                        xx    x               !             x         x                    ",
   "                  o   x                        x     x         o     !   x         x         x                    ",
   "               xxxxxxxx       xxx   xxx        x     x               ! o x         x     v   x                    ",
   "              xx     xx         x   x          x     x        xxx    !   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x  v xx               !   x   x               x                    ",
   "     @       x         x        x   x          x     x               ! p x   x               x                    ",
   "    xxx      x         x        x   x          x     xp              xxxxxxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     xx                    o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x                           x x        ox                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x                xxxxxxxxxxxx xx       xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!!       xx              xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!x!                        xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx!                                                     ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx !                                                     ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx  !                                                     "],    
  ["                                                                                               x!!!!!!!!!!!!!!",
   "                                                                                               x!!!!!!!!!!!!!!",
   "                                                                                               x!!!!!!!!!!!!!!",
   "                                                                                               x!!!!!!!!!!!!!!",
   "                                                                                               x!!!!!!!!!!!!!!",
   "                                        o                                                      x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                                                                        x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                 x                                                      x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                 x                                        z             x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                 x                                             o        x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                 x                             !!!            xxxx      x!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!                 xx                             x                x      xv   v    v   v",
   "xxxxxxxxxxxxxxxxxxxxxxx               !!xx                 !!!         x=           =   x      x              ",
   "           xxxxxxxxxxxx               !!xx                 !x!         x     >          x     xx              ",
   "                xxxxx                 xxxxxx               !x          x!!!!!!!!!!!!!!!!x      x              ",
   "                 xxx                  x   x                !x   oooo   xxxxxxxxxxxxxxxxxxx     x              ",
   "           xx     x       o           x   x              !!!x          x                x      x              ",
   "           !!             x           x   x              !!!xxxxxxxxxxx                       xx              ",
   "           !!                         x   xx   o  x   xxxxxxxx                                 x              ",
   "o    b     !!                         x   xxxxxxxxx   xxxxxxxx                x                x              ",
   "x          !!             !           x   x           x                    x!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x          !!             x       >   x   x           x                     xxx                               ",
   "x          !!                       o x   xx          x                                                       ",
   "x          !!    o                  x x   x= = = =    x         o                                             ",
   "x          xxxxxxxxxxxxx              x   x           x                                                       ",
   "     >     xxxxxxxxxxxxx              x   x    = = = =x     o                                                 ",
   " o                     xxxxxxxxxxxxxxxx   xx          x                                                       ",
   "                                      x   x           x     xx       x >  x                                   ",
   "xxxxxxxxxxxxxxxx                     ox   x           x              x            x                           ",
   "!!!!!!!!!!!!!!!!                     xxxxxxx     o o  x!!!!!!!!!!!!!!x                                        ",
   "vxxxxxxxxxxxxxxv                           x          x!!!!!!!!!!!!!!!xxxxxxxxxxxxx                           ",
   "         x          xx                   o x   xxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!x                           ",
   "  o      xo        x!!xx   xxxxxxxxxxxxxxxxx                          xxxxxxxxxxxxx                        o  ",
   "xxxxx    xx        x!!xx                  x                                      !x                      xxxxx",
   "x        x         x!!xxo                 x                                      !x            !         x!x!x",
   "x        x         x!xxxx                 xxxxxxx                        xxxxx   !x            !          !x! ",
   "x      xxxxxxxxxxxxx!xxxxxxxx!!xxxxxx     x                              x!!!x    x            !          !x! ",
   "xx                                       xx                              xvx!x    x            x          !x! ",
   "  xx                                      x       |xxxx|    |xxxx|     xxx xxx    xo           x          !x! ",
   "  x                                o o    x                              x        xx      xxxxxx          !x! ",
   "  x o           = xxxxx =     xx          x                             xx        x    >       xx        x!x! ",
   "  xxxxx           ox!xo       x    xxx    x                             x!xo      x!!!!!!!!!!!!!xx  >    x!x! ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx!xx                             x!x! ",
   "  x       @         x         x           x!!x    x!!!!x    x!!!!x    xx!!!xx                            x!x! ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                       xxxxx                                  ",
   "                                                                                                              "],   
  ["                                x                !!        x!!!!!!!!!!!!!                                     ",
   "             o                  xp               !!        x!!!!!!!!!!!!!                                     ",
   "           xxxxxxxxxxxxxxxx     xx                         x!!!!!!!!!!!!!                                  o  ",
   "           !            !x      x           o              xxxxxxxxxxxxxx                               xxxxxx",
   "           !            !x    xxx       xxxxxxxxxx                                                            ",
   "           !            !x               x                                                                    ",
   "           !            !x               x                                             !      >         !     ",
   "                        !x               x                  xxxxxxxxxxx                                       ",
   "                        !x  o            x                 x!!!!!!!!!!!                                       ",
   "                        !xxxxxx   >      xx                x!         !     xx                          o     ",
   "                        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x         !       x xxx x xxx x x x x xxxxxxxxxxxx",
   "                                                      !!!!!      o    !   o   !!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!",
   "                                                      !!!!x           xxxxxxxxxxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxx",
   "                                          o     |     !xxx                                                    ",
   "                                                                                                  o           ",
   "        >  !                                             o   x   >    x                 xxxxxxxxxxxxxxx       ",
   "xxxxxxxxxxx!                                           xxxxxx xxxxxxxx  x x x x x x x                 !       ",
   "           !                       | x    =    x    xxxx!!!!! !!!!!!!! !!!!!!!!!!!!!!                 !       ",
   "       |   !    >     ! =      xxxxxxxxxxxxxxxxxxxxxx                          !                      !       ",
   "                                             x!              |   o    |        !                      !       ",
   " ooo                      o               o  x!         xxxxxxxxxxxxxxxxxxx    x                      !       ",
   " ooo     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!         !!!                    x                      !       ",
   "xxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!         !!!             o      x                      !       ",
   "  x                        |                            !!!     xxxxxxxxxxxxxxxx                              ",
   "  x     m                                               !!!                                                   ",
   "  x                                                     !!!                                                   ",
   "  x                                                     !!!                                                  p",
   "  x             o          o          o                 !!!                                           xxxxxxxx",
   "  x  @                                                  !!!              o                                    ",
   "  xxxxxxx                                     xxxxx     !!!           ! xxx            o                      ",
   "        x>   >    >     >  x >    >     >   > x   x     !!!xxx >      xxxxxxx     x    x  !    >   !          ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x  p  !!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],  
  ["                                                                           !!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxx",
   "             o                                                                                               x",
   "        h  xxxxxx                                                                                    h     o x",
   "           !    xxxxxxxxxx                  o                                                           xxxxxx",
   "   h       !            !x              xxxxxx                                             |      hh         x",
   "           !            !x               xx      h                                      h     h              x",
   "      h    !            !x               xx      h   h                                 hh    hh              x",
   "                        !xx  o           xx          h                               |       hh              x",
   "  h                     !xxxxxxx         xx                                 o     h                          x",
   "                        !x        >      xx           xx                    xx                               x",
   "                   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                   x                                 x",
   "xxxxxxxxxxxxx                  x      x               !xx                      x  >     >   >  >    >   >  xxx",
   "!!!!!!!!!!!!x                             o           !xxx            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!                                         !xx              x!!!                                   ",
   "!!!!!!!!!!!!!                         |               !x               x!!!                                   ",
   "!!!!!!!!!!!!!           hhh               h           !x o   x  =   x  x!!!                                   ",
   "!!!!!!!!!!!!!           hhh    |          h           !xxxxxx xxxxxx|xxx!!!                                   ",
   "!!!!!!!!!!!!!                                 h     xxxx!!!!! !!!!!! !!!!!!                                   ",
   "!!!!!!!!!!!!! p                                 h            |                                                ",
   "!!!!!!!!!!!!!xxxxxx                          x                  o             o                               ",
   "!!!!!!!!!!!!!!!!!!!xx>   >   > !      ! >  > x!    x x x x x x x x x x x x x xxx        o                     ",
   "!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxx             ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                 xx   h        ",
   "                                                                                            o    x            ",
   "                                                                                         h       x            ",
   "                                         o                                            h          x            ",
   "                                           xx       h    h h                                     x         o  ",
   "  f             o          o    h      h  !x xx o          h    hh              o   h              h  xxxxxxxx",
   "           hh     h        h    h     hh  !x   xxxx             hh             xxx               h            ",
   "                  h    h   h          hh  !x       !!!!!!!      hh       o   xxxx           o  h              ",
   "      h                h   h          h   !x            !!!            xxxxxx!!!!!!!!!!!!!!xxxxx        !!!!!!",
   "  @                                       !x            !!!!!!!!!!!!!!!!xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                      x   !x            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                                  "]   
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
