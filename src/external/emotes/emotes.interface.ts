// TODO: Support unicode emotes
export type EmoteProvider = 'twitch' | 'bttv' | 'ffz' | '7tv';

export interface Emote {
  provider: EmoteProvider; // From which emote provider?
  id: string; // provider-specific unique ID
  name: string; //  name of the emote (ex: "BibleThump")
  url: string; // Default URL of the emote pic
}
