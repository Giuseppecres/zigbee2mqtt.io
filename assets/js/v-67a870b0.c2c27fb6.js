"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9222],{52290:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-67a870b0",path:"/devices/8718696170625.html",title:"Philips 8718696170625 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 8718696170625 control via MQTT",description:"Integrate your Philips 8718696170625 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Effect (enum)",slug:"effect-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/8718696170625.md",git:{updatedTime:1644762654e3}}},58491:(e,t,o)=>{o.r(t),o.d(t,{default:()=>G});var a=o(66252);const n=(0,a.uE)('<h1 id="philips-8718696170625" tabindex="-1"><a class="header-anchor" href="#philips-8718696170625" aria-hidden="true">#</a> Philips 8718696170625</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>8718696170625</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue Fuzo outdoor wall light</td></tr><tr><td>Exposes</td><td>light (state, brightness), effect, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/8718696170625.jpg" alt="Philips 8718696170625"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.</p><h4 id="touchlink-factory-reset" tabindex="-1"><a class="header-anchor" href="#touchlink-factory-reset" aria-hidden="true">#</a> Touchlink factory reset</h4>',6),s=(0,a.Uk)("See "),i=(0,a.Uk)("Touchlink"),r=(0,a._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue bridge")],-1),l=(0,a._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),d=(0,a._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue dimmer switch")],-1),c=(0,a.Uk)("With "),u=(0,a.Uk)("one"),h=(0,a.Uk)(" of the "),p=(0,a.Uk)("two"),b=(0,a.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),m=(0,a._)("ol",null,[(0,a._)("li",null,"Power-supply the bulb"),(0,a._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,a._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,a._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,a._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),g=(0,a.Uk)("See also the "),f={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),v=(0,a.Uk)("."),k=(0,a._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Bluetooth (if supported by device)")],-1),w=(0,a.Uk)("Install the Philips Hue Bluetooth app for "),q={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Android"),T=(0,a.Uk)(" or "),U={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("iOS"),x=(0,a.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),N=(0,a._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,a.Uk)(" TRADFRI remote control")],-1),A=(0,a.Uk)("This may also be possible with the "),L={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},F=(0,a.Uk)("Tradfri Remote Control"),I=(0,a.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),O={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},P=(0,a.Uk)("This may not always work, even if the Hue bulb starts flashing"),D=(0,a.Uk)("."),H=(0,a._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,a.Uk)(" Power-on behavior")],-1),W=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),M={href:"https://www.zigbee2mqtt.io/../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttfriendly_nameset",target:"_blank",rel:"noopener noreferrer"},R=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),z=(0,a.Uk)(" with the following payload."),Y=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),S=(0,a.Uk)("This device supports OTA updates, for more information see "),V=(0,a.Uk)("OTA updates"),j=(0,a.Uk)("."),C=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),Z=(0,a.Uk)("How to use device type specific configuration"),Q=(0,a.uE)('<ul><li><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),B={},G=(0,o(83744).Z)(B,[["render",function(e,t){const o=(0,a.up)("RouterLink"),B=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[s,(0,a.Wm)(o,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[i])),_:1})]),r,l,d,(0,a._)("p",null,[c,(0,a.Wm)(o,{to:"/devices/324131092621.html"},{default:(0,a.w5)((()=>[u])),_:1}),h,(0,a.Wm)(o,{to:"/devices/929002398602.html"},{default:(0,a.w5)((()=>[p])),_:1}),b]),m,(0,a._)("p",null,[g,(0,a._)("a",f,[_,(0,a.Wm)(B)]),v]),k,(0,a._)("p",null,[w,(0,a._)("a",q,[y,(0,a.Wm)(B)]),T,(0,a._)("a",U,[E,(0,a.Wm)(B)]),x]),N,(0,a._)("p",null,[A,(0,a._)("a",L,[F,(0,a.Wm)(B)]),I,(0,a._)("a",O,[P,(0,a.Wm)(B)]),D]),H,(0,a._)("p",null,[W,(0,a._)("a",M,[R,(0,a.Wm)(B)]),z]),Y,(0,a._)("p",null,[S,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[V])),_:1}),j]),C,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[Z])),_:1})])]),Q],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);