export default function getImportString(nvim, { /*buffer, */word, importPath, context }) {
  if (context.type === 'named') {
    return [`import { ${word} } from '${importPath}';`];
  }

  // default import
  return [`import ${word} from '${importPath}';`];
}
