import { Provide } from '@midwayjs/core';
//import { HNSWLib } from 'langchain/vectorstores/hnswlib';
//import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { TextLoader } from 'langchain/document_loaders/fs/text';
//import { RetrievalQAChain, loadQARefineChain } from 'langchain/chains';
//import { ChatGlm6BLLM } from '../llm/chatglm-6b';
//import { OpenAI } from "langchain/llms/openai";
@Provide()
export class MainService {
  async run() {
    // Create docs with a loader
    //const model = new ChatGlm6BLLM({});
    const loader = new TextLoader(
      //'src/config/config.default.ts'
      'src/document_loaders/example_data/example.txt'
    );
    const docs = await loader.load();
    console.log({ docs });
    // Load the docs into the vector store
    /* const vectorStore = await HNSWLib.fromDocuments(
      docs,
      new OpenAIEmbeddings()
    );
    const directory = 'your/directory/here';
    await vectorStore.save(directory); */

    // Load the vector store from the same directory
    /* const loadedVectorStore = await HNSWLib.load(
      directory,
      new OpenAIEmbeddings()
    ); */
    // Search for the most similar document
    /* const chain = RetrievalQAChain.fromLLM(
      model,
      loadedVectorStore.asRetriever()
    ); */
   /*  const res = await chain.call({
      query: 'What did the president say about Justice Breyer?',
    });
    console.log({ res }); */
    /* const result = await loadedVectorStore.similaritySearch('hello world', 1);
    console.log(result); */
  }
}
