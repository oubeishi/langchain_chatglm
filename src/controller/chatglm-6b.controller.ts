import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { HumanChatMessage } from 'langchain/schema';
import { ChatGlm6BLLM } from '../llm/chatglm-6b';
import { UserService } from '../service/user.service';

@Controller('/chatglm')
export class ChatGlm6BController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
  @Post('/question')
  async handleQuestion(@Body() body: any) {
    console.log(body);
    const chat = new ChatGlm6BLLM({});
    const responseA = await chat.call([new HumanChatMessage(body.prompt)]);
    return responseA;
  }
}
