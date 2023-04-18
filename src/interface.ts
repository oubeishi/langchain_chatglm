/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
export interface ChatGlm6BRequest {
  prompt: string;
  history: string;
  max_length: number;
  top_p: number;
  temperature: number;
}
