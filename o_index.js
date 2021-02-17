class ParseNode {
    static parser = null;

    children = [];
    start = 0;
    end = 0;
    
    constructor(start, end, children = []) {
        this.start = start;
        this.end = end;
        this.children = children;
    }

    static tryMatch() {
        return undefined;
    }
}

class SourceCharacter extends ParseNode {}
class InputElementDiv extends ParseNode {}
class InputElementRegExp extends ParseNode {}
class InputElementRegExpOrTemplateTail extends ParseNode {}
class InputElementTemplateTail extends ParseNode {}
class WhiteSpace extends ParseNode {}
class LineTerminator extends ParseNode {}
class LineTerminatorSequence extends ParseNode {}
class Comment extends ParseNode {}
class MultiLineComment extends ParseNode {}
class MultiLineCommentChars extends ParseNode {}
class PostAsteriskCommentChars extends ParseNode {}
class PostAsteriskCommentChar extends ParseNode {}
class MultiLineNotForwardSlashOrAsteriskChar extends ParseNode {}
class SingleLineComment extends ParseNode {}
class SingleLineCommentChars extends ParseNode {}
class SingleLineCommentChar extends ParseNode {}
class CommonToken extends ParseNode {}
class IdentifierName extends ParseNode {}
class IdentifierStart extends ParseNode {}
class IdentifierPart extends ParseNode {}
class UnicodeIDStart extends ParseNode {}
class UnicodeIDContinue extends ParseNode {}
class ReservedWord extends ParseNode {}
class Punctuator extends ParseNode {}
class OptionalChainingPunctuator extends ParseNode {}
class OtherPunctuator extends ParseNode {}
class DivPunctuator extends ParseNode {}
class RightBracePunctuator extends ParseNode {}
class NullLiteral extends ParseNode {}
class BooleanLiteral extends ParseNode {}
class NumericLiteral extends ParseNode {}
class DecimalBigIntegerLiteral extends ParseNode {}
class NonDecimalIntegerLiteral extends ParseNode {}
class BigIntLiteralSuffix extends ParseNode {}
class DecimalLiteral extends ParseNode {}
class DecimalIntegerLiteral extends ParseNode {}
class DecimalDigits extends ParseNode {}
class DecimalDigit extends ParseNode {}
class NonZeroDigit extends ParseNode {}
class ExponentPart extends ParseNode {}
class ExponentIndicator extends ParseNode {}
class SignedInteger extends ParseNode {}
class BinaryIntegerLiteral extends ParseNode {}
class BinaryDigits extends ParseNode {}
class BinaryDigit extends ParseNode {}
class OctalIntegerLiteral extends ParseNode {}
class OctalDigits extends ParseNode {}
class OctalDigit extends ParseNode {}
class HexIntegerLiteral extends ParseNode {}
class HexDigits extends ParseNode {}
class HexDigit extends ParseNode {}
class StringLiteral extends ParseNode {}
class DoubleStringCharacters extends ParseNode {}
class SingleStringCharacters extends ParseNode {}
class SingleStringCharacter extends ParseNode {}
class DoubleStringCharacter extends ParseNode {}
class LineContinuaton extends ParseNode {}
class EscapeSequence extends ParseNode {}
class CharacterEscapeSequence extends ParseNode {}
class SingleEscapeSequence extends ParseNode {}
class NonEscapeCharacter extends ParseNode {}
class EscapeCharacter extends ParseNode {}
class HexEscapeSequence extends ParseNode {}
class UnicodeEscapeSequence extends ParseNode {}
class Hex4Digits extends ParseNode {}
class RegularExpressionLiteral extends ParseNode {}
class RegularExpressionBody extends ParseNode {}
class RegularExpressionChars extends ParseNode {}
class RegularExpressionFirstChar extends ParseNode {}
class RegularExpressionChar extends ParseNode {}
class RegularExpressionBackslashSequence extends ParseNode {}
class RegularExpressionNonTerminator extends ParseNode {}
class RegularExpressionClass extends ParseNode {}
class RegularExpressionClassChars extends ParseNode {}
class RegularExpressionClassChar extends ParseNode {}
class RegularExpressionFlags extends ParseNode {}
class Template extends ParseNode {}
class NoSubstitutionTemplate extends ParseNode {}
class TemplateHead extends ParseNode {}
class TemplateSubstitutionTail extends ParseNode {}
class TemplateMiddle extends ParseNode {}
class TemplateTail extends ParseNode {}
class TemplateCharacters extends ParseNode {}
class TemplateCharacter extends ParseNode {}
class NotEscapeSequence extends ParseNode {}
class NotCodePoint extends ParseNode {}
class CodePoint extends ParseNode {}
class IdentifierReference extends ParseNode {}
class BindingIdentifier extends ParseNode {}
class LabelIdentifier extends ParseNode {}
class Identifier extends ParseNode {}
class PrimaryExpression extends ParseNode {}
class CoverParenthesizedExpressionAndArrowParameterList extends ParseNode {}
class ParenthesizedExpression extends ParseNode {}
class Literal extends ParseNode {}
class ArrayLiteral extends ParseNode {}
class ElementList extends ParseNode {}
class Elison extends ParseNode {}
class SpreadElement extends ParseNode {}
class ObjectLiteral extends ParseNode {}
class PropertyDefinitionList extends ParseNode {}
class PropertyDefinition extends ParseNode {}
class PropertyName extends ParseNode {}
class LiteralPropertyName extends ParseNode {}
class ComputedPropertyName extends ParseNode {}
class CoverInitializedName extends ParseNode {}
class Initializer extends ParseNode {}
class TemplateLiteral extends ParseNode {}
class SubstitutionTemplate extends ParseNode {}
class TemplateSpans extends ParseNode {}
class TemplateMiddleList extends ParseNode {}
class MemberExpression extends ParseNode {}
class SuperProperty extends ParseNode {}
class MetaProperty extends ParseNode {}
class NewTarget extends ParseNode {}
class ImportMeta extends ParseNode {}
class NewExpression extends ParseNode {}
class CallExpression extends ParseNode {}
class CallMemberExpression extends ParseNode {}
class SuperCall extends ParseNode {}
class ImportCall extends ParseNode {}
class Arguments extends ParseNode {}
class ArgumentList extends ParseNode {}
class OptionalExpression extends ParseNode {}
class LeftHandSideExpression extends ParseNode {}
class UpdateExpression extends ParseNode {}
class UnaryExpression extends ParseNode {}
class ExponentiationExpression extends ParseNode {}
class MultiplicativeExpression extends ParseNode {}
class MultiplicativeOperator extends ParseNode {}
class AdditiveExpression extends ParseNode {}
class ShiftExpression extends ParseNode {}
class RelationalExpression extends ParseNode {}
class EqualityExpression extends ParseNode {}
class BitwiseANDExpression extends ParseNode {}
class BitwiseXORExpression extends ParseNode {}
class BitwiseORExpression extends ParseNode {}
class LogicalANDExpression extends ParseNode {}
class LogicalORExpression extends ParseNode {}
class CoalesceExpression extends ParseNode {}
class CoalesceExpressionHead extends ParseNode {}
class ConditionalExpression extends ParseNode {}
class AssignmentExpression extends ParseNode {}
class AssignmentOperator extends ParseNode {}
class AssignmentPattern extends ParseNode {}
class ObjectAssignmentPattern extends ParseNode {}
class ArrayAssignmentPattern extends ParseNode {}
class AssignmentRestProperty extends ParseNode {}
class AssignmentPropertyList extends ParseNode {}
class AssignmentElementList extends ParseNode {}
class AssignmentElisonElement extends ParseNode {}
class AssignmentProperty extends ParseNode {}
class AssignmentElement extends ParseNode {}
class AssignmentRestElement extends ParseNode {}
class DestructuringAssignmentTarget extends ParseNode {}
class Expression extends ParseNode {}
class Statement extends ParseNode {}
class Declaration extends ParseNode {}
class HoistableDeclaration extends ParseNode {}
class BreakableStatement extends ParseNode {}
class BlockStatement extends ParseNode {}
class Block extends ParseNode {}
class StatementList extends ParseNode {}
class StatementListItem extends ParseNode {}
class LexicalDeclaration extends ParseNode {}
class LetOrConst extends ParseNode {}
class BindingList extends ParseNode {}
class LexicalBinding extends ParseNode {}
class VariableStatement extends ParseNode {}
class VariableDeclarationList extends ParseNode {}
class VariableDeclaration extends ParseNode {}
class BindingPattern extends ParseNode {}
class ObjectBindingPattern extends ParseNode {}
class ArrayBindingPattern extends ParseNode {}
class BindingRestProperty extends ParseNode {}
class BindingPropertyList extends ParseNode {}
class BindingElementList extends ParseNode {}
class BindingElisonElement extends ParseNode {}
class BindingProperty extends ParseNode {}
class BindingElement extends ParseNode {}
class SingleNameBinding extends ParseNode {}
class BindingRestElement extends ParseNode {}
class EmptyStatement extends ParseNode {}
class IfStatement extends ParseNode {}
class IterationStatement extends ParseNode {}
class ForDeclaration extends ParseNode {}
class ForBinding extends ParseNode {}
class ContinueStatement extends ParseNode {}
class BreakStatement extends ParseNode {}
class ReturnStatement extends ParseNode {}
class WithStatement extends ParseNode {}
class SwitchStatement extends ParseNode {}
class CaseBlock extends ParseNode {}
class CaseClauses extends ParseNode {}
class CaseClause extends ParseNode {}
class DefaultClause extends ParseNode {}
class LabelledStatement extends ParseNode {}
class LabelledItem extends ParseNode {}
class ThrowStatement extends ParseNode {}
class TryStatement extends ParseNode {}
class Catch extends ParseNode {}
class Finally extends ParseNode {}
class CatchParameter extends ParseNode {}
class DebuggerStatement extends ParseNode {}
class FunctionDeclaration extends ParseNode {}
class FunctionExpression extends ParseNode {}
class UniqueFormalParameters extends ParseNode {}
class FormalParameters extends ParseNode {}
class FormalParameterList extends ParseNode {}
class FunctionRestParameter extends ParseNode {}
class FormalParameter extends ParseNode {}
class FunctionBody extends ParseNode {}
class FunctionStatementList extends ParseNode {}
class ArrowFunction extends ParseNode {}
class ArrowParameters extends ParseNode {}
class ConciseBody extends ParseNode {}
class ExpressionBody extends ParseNode {}
class ArrowFormalParameters extends ParseNode {}
class AsyncArrowFunction extends ParseNode {}
class AsyncConciseBody extends ParseNode {}
class AsyncArrowBBindingIdentifier extends ParseNode {}
class CoverCallExpressionAndAsyncArrowHead extends ParseNode {}
class AsyncArrowHead extends ParseNode {}
class MethodDefinition extends ParseNode {}
class PropertySetParameterList extends ParseNode {}
class GeneratorMethod extends ParseNode {}
class GeneratorDeclaration extends ParseNode {}
class GeneratorExpression extends ParseNode {}
class GeneratorBody extends ParseNode {}
class YieldExpression extends ParseNode {}
class AsyncGeneratorMethod extends ParseNode {}
class AsyncGeneratorDeclaration extends ParseNode {}
class AsyncGeneratorExpression extends ParseNode {}
class AsyncGeneratorBody extends ParseNode {}
class AsyncFunctionDeclaration extends ParseNode {}
class AsyncFunctionExpression extends ParseNode {}
class AsyncMethod extends ParseNode {}
class AsyncFunctionBody extends ParseNode {}
class AwaitExpression extends ParseNode {}
class ClassDeclaration extends ParseNode {}
class ClassExpression extends ParseNode {}
class ClassTail extends ParseNode {}
class ClassHeritage extends ParseNode {}
class ClassBody extends ParseNode {}
class ClassElementList extends ParseNode {}
class ClassElement extends ParseNode {}
class Script extends ParseNode {}
class ScriptBody extends ParseNode {}
class Module extends ParseNode {}
class ModuleBody extends ParseNode {}
class ModuleItemList extends ParseNode {}
class ModuleItem extends ParseNode {}
class ImportDeclaration extends ParseNode {}
class ImportClause extends ParseNode {}
class ImportedDefaultBinding extends ParseNode {}
class NameSpaceImport extends ParseNode {}
class NamedImports extends ParseNode {}
class FromClause extends ParseNode {}
class ImportsList extends ParseNode {}
class ModuleSpecifier extends ParseNode {}
class ImportedBinding extends ParseNode {}
class ExportDeclaration extends ParseNode {}
class ExportFromClause extends ParseNode {}
class NamedExports extends ParseNode {}
class ExportsList extends ParseNode {}
class ExportSpecifier extends ParseNode {}
class StringNumericLiteral extends ParseNode {}
class StrWhiteSpace extends ParseNode {}
class StrWhiteSpaceChar extends ParseNode {}
class StrNumericLiteral extends ParseNode {}
class StrDecimalLiteral extends ParseNode {}
class StrUnsignedDecimalLiteral extends ParseNode {}
class uri extends ParseNode {}
class uriCharacters extends ParseNode {}
class uriCharacter extends ParseNode {}
class uriReserved extends ParseNode {}
class uriUnescaped extends ParseNode {}
class uriEscaped extends ParseNode {}
class uriAlpha extends ParseNode {}
class uriMark extends ParseNode {}
class Pattern extends ParseNode {}
class Disjunction extends ParseNode {}
class Alternative extends ParseNode {}
class Term extends ParseNode {}
class Assertion extends ParseNode {}
class Quantifier extends ParseNode {}
class QuantifierPrefix extends ParseNode {}
class Atom extends ParseNode {}
class SyntaxCharacter extends ParseNode {}
class AtomEscape extends ParseNode {}
class CharacterEscape extends ParseNode {}
class ControlEscape extends ParseNode {}
class ControlLetter extends ParseNode {}
class GroupSpecifier extends ParseNode {}
class GroupName extends ParseNode {}
class RegExpIdentifierName extends ParseNode {}
class RegExpIdentifierStart extends ParseNode {}
class RegExpUnicodeEscapeSequence extends ParseNode {}
class LeadSurrogate extends ParseNode {}
class TrailSurrogate extends ParseNode {}
class NonSurrogate extends ParseNode {}
class IdentityEscape extends ParseNode {}
class DecimalEscape extends ParseNode {}
class CharacterClassEscape extends ParseNode {}
class UnicodePropertyValueExpression extends ParseNode {}
class UnicodePropertyName extends ParseNode {}
class UnicodePropertyNameCharacters extends ParseNode {}
class UnicodePropertyValue extends ParseNode {}
class UnicodePropertyNameOrValue extends ParseNode {}
class UnicodePropertyValueCharacters extends ParseNode {}
class UnicodePropertyValueCharacter extends ParseNode {}
class UnicodePropertyNameCharacter extends ParseNode {}
class CharacterClass extends ParseNode {}
class ClassRanges extends ParseNode {}
class NonEmptyClassRanges extends ParseNode {}
class NonEmptyClassRangesNoDash extends ParseNode {}
class ClassAtom extends ParseNode {}
class ClassAtomNoDash extends ParseNode {}
class ClassEscape extends ParseNode {}

function ScriptRecord() {
	let record = {};
	record.Realm = undefined;
	record.Environment = undefined;
	record.ECMAScriptCode = undefined;
	record.HostDefined = undefined;
	return record;
}

class Parser {
    static goto;
    static peek;
    static get;
    static consumews;
    static test;

    src = '';
    pos = 0;

    constructor() {
        Parser.goto = this.goto.bind(this);
        Parser.peek = this.peek.bind(this);
        Parser.get  = this.get.bind(this);
        Parser.consumews = this.consumews.bind(this);
        Parser.test = this.test.bind(this);
    }

    goto(pos) {
        this.pos = pos;
    }

    peek(dist = 1) {
        return this.src.charAt(this.pos+dist);
    }

    get() {
        let c = this.stc.charAt(this.pos);
        this.pos++;
        return c;
    }

    consumews(includelb = true) {
        let f = true;
        while (f) {
            let bt = this.pos;
            let c = this.get();
            let g = false;
            if (includelb) {if (c == '\n') g=true;}
            if (c != ' ' && c != '\t' && !g) {
                f = false;
                this.goto(bt);
            }
        }
    }

    test(str, consumeIfTrue = true) {
        let len = str.length;
        for (let i = 0; i < len; i++) {
            let c = this.peek(i);
            if (c != str.charAt(i)) return false
        }
        if (consumeIfTrue) this.goto(this.pos + len);
        return true
    }

    ParseScript(sourceText) {
        this.src = sourceText;
        this.pos = 0;
        let parsed = Script.tryMatch()
        let record = new ScriptRecord()
        record.ECMAScriptCode = parsed
        return record;
    }
}

let source = `let a = 0;
let b = 1;
let c = a + b;`
dbg = 0
let a = new Parser()
let s = a.ParseScript(source)