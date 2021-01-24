## google meet mic title

chrome extension to update the document title (and window title) based on microphone mute/unmute events (eg. ctrl+d in browser)

this brings info to the desktop environment level where it can be parsed

eg. [swaywm](https://swaywm.org/)

```shell
$ swaymsg -t get_tree | jq -r '.. |  select(.pid?) | .name | capture("meet mic (?<status>on|off)") | "mic is \(.status)"'
mic is on
```

now it can be put in something like swaybar
