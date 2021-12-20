class Canvas{constructor(t){this._mediaPlayer=t}get elementHtml(){try{return this._elementHtml}catch(t){throw t}}set elementHtml(t){try{this._elementHtml=t}catch(t){throw t}}set context(t){try{this._context=t}catch(t){throw t}}get context(){try{return this._context}catch(t){throw t}}set mediaPlayer(t){try{this._mediaPlayer=t}catch(t){throw t}}get mediaPlayer(){try{return this._mediaPlayer}catch(t){throw t}}getVirtualWidth(){try{return Number(this.mediaPlayer.screen.elementHtml.style.width.replace("vw",""))*window.innerWidth/100}catch(t){throw t}}getVirtualHeight(){try{return Number(this.mediaPlayer.screen.elementHtml.style.height.replace("vh",""))*window.innerHeight/100||766}catch(t){throw t}}computeFrame(){this.context.drawImage(this.mediaPlayer.media,0,0,this.getVirtualWidth(),this.getVirtualHeight());let t=this.context.getImageData(0,0,this.getVirtualWidth(),this.getVirtualHeight()),e=t.data.length/4;for(let i=0;i<e;i++){let e=t.data[4*i+0],a=t.data[4*i+1],h=t.data[4*i+2];a>100&&e>100&&h<43&&(t.data[4*i+3]=0)}}timerCallback(){if(this.mediaPlayer.media.paused||this.mediaPlayer.media.ended)return;this.computeFrame();let t=this;setTimeout(function(){t.timerCallback()},0)}createCanvas(){try{this.elementHtml=document.createElement("canvas"),this.resizeCanvas(),this.context=this.elementHtml.getContext("2d")}catch(t){throw t}}resizeCanvas(){try{this.elementHtml.width=this.getVirtualWidth(),this.elementHtml.height=this.getVirtualHeight(),null!=this.context&&this.context.drawImage(this.mediaPlayer.media,0,0,this.getVirtualWidth(),this.getVirtualHeight())}catch(t){throw t}}resizeCanvasToScreen(){try{this.elementHtml.height=99*window.innerHeight/100||766,this.elementHtml.width=98*window.innerWidth/100,null!=this.context&&this.context.drawImage(this.mediaPlayer.media,0,0,this.getVirtualWidth(),this.getVirtualHeight())}catch(t){throw t}}}export default Canvas;