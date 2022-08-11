import { ChatToken, TranslateChatRequest, UserConfigs } from "@twtts/shared";

export class TranslateChatDto implements TranslateChatRequest {
  tokens: ChatToken[];
  displayName?: string;
  configs: UserConfigs;
}
