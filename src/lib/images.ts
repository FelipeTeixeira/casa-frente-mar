/**
 * Resolve arquivos de src/assets/images pelo nome do arquivo.
 * Basta substituir o arquivo (mantendo o mesmo nome) para trocar a imagem —
 * as referências em src/data/*.json continuam funcionando sem alterar código.
 */
const modules = import.meta.glob<{ default: string }>(
  "/src/assets/images/*",
  { eager: true },
);

const imageMap = new Map<string, string>();
for (const path in modules) {
  const filename = path.split("/").pop();
  if (filename) imageMap.set(filename, modules[path].default);
}

export function resolveImage(filename: string): string {
  return imageMap.get(filename) ?? "";
}
