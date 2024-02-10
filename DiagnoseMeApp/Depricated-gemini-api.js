  //Depricated
  
  // // Function to stream data to a Gemini API endpoint
  // export function streamGemini(data) {
  //   return fetch('http://127.0.0.1:5000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  // }

  // /**
  //  * A helper function that streams text output chunks from a fetch() response.
  //  */
  // async function* streamResponseChunks(response) {
  //   let buffer = '';

  //   const CHUNK_SEPARATOR = '\n\n';

  //   // Function to process the buffer and yield chunks
  //   let processBuffer = async function* (streamDone = false) {
  //     while (true) {
  //       let flush = false;
  //       let chunkSeparatorIndex = buffer.indexOf(CHUNK_SEPARATOR);
  //       if (streamDone && chunkSeparatorIndex < 0) {
  //         flush = true;
  //         chunkSeparatorIndex = buffer.length;
  //       }
  //       if (chunkSeparatorIndex < 0) {
  //         break;
  //       }

  //       let chunk = buffer.substring(0, chunkSeparatorIndex);
  //       buffer = buffer.substring(chunkSeparatorIndex + CHUNK_SEPARATOR.length);
  //       chunk = chunk.replace(/^data:\s*/, '').trim();
  //       if (!chunk) {
  //         if (flush) break;
  //         continue;
  //       }
  //       let { error, text } = JSON.parse(chunk);
  //       if (error) {
  //         console.error(error);
  //         throw new Error(error?.message || JSON.stringify(error));
  //       }
  //       yield text;
  //       if (flush) break;
  //     }
  //   };

  //   const reader = response.body.getReader();
  //   try {
  //     while (true) {
  //       const { done, value } = await reader.read()
  //       if (done) break;
  //       buffer += new TextDecoder().decode(value);
  //       console.log(new TextDecoder().decode(value));
  //       yield* processBuffer();
  //     }
  //   } finally {
  //     reader.releaseLock();
  //   }

  //   yield* processBuffer(true);
  // }
