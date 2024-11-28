import fs from "fs";
import path from "path";

export async function GET(req){
    const dataPath = path.join(process.cwd(), "public", "blogdetails.json");

    

      try {
        const fileContents = fs.readFileSync(dataPath, "utf8");
        return new Response(fileContents, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Failed to read the file." }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
}