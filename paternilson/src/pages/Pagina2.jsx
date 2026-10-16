import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';

const COLORS = {
  background: '#F8F4E9',
  forest: '#34483D',
  green: '#536D5B',
  sage: '#DDE0D0',
  sageDark: '#8F9A7E',
  cream: '#F1EBDD',
  peach: '#F3E1D2',
  terracotta: '#C97550',
  ink: '#294438',
  muted: '#68766A',
  white: '#FFFDF7',
};

const sections = [
  {
    id: 'cuidados',
    title: 'Cuidados com\no bebê',
    description: 'Aprenda o básico para cuidar com confiança.',
    bullets: ['Banho e higiene', 'Troca de fraldas', 'Amamentação e alimentação', 'Como segurar e acalmar o bebê'],
    button: 'Ver dicas',
    color: '#E8E8D9',
    icon: '👶',
    accent: COLORS.forest,
    details: [
      ['Banho e higiene', 'Separe tudo antes de começar e mantenha uma mão apoiando o bebê. A água deve estar morna, nunca quente.'],
      ['Troca de fraldas', 'Deixe fralda, lenços e roupa limpa ao alcance. Nunca deixe o bebê sozinho em uma superfície elevada.'],
      ['Alimentação', 'Siga as orientações do pediatra e respeite os sinais de fome e saciedade do bebê.'],
      ['Colo e aconchego', 'Apoie a cabeça e o pescoço. Movimentos suaves, voz tranquila e contato próximo ajudam a acalmar.'],
    ],
  },
  {
    id: 'sono',
    title: 'Sono seguro\ne rotina',
    description: 'Entenda como o bebê dorme e crie uma rotina saudável.',
    bullets: ['Posições seguras para dormir', 'Rotina de sono', 'Sinais de sono e cansaço', 'Dicas para o dia a dia'],
    button: 'Ver dicas',
    color: '#F4E7D8',
    icon: '🌙',
    accent: COLORS.terracotta,
    details: [
      ['Posição segura', 'Coloque o bebê para dormir de barriga para cima, em colchão firme e plano, sem travesseiros, mantas soltas ou bichos de pelúcia.'],
      ['Rotina de sono', 'Um ambiente tranquilo e uma sequência simples, como banho e luz baixa, podem ajudar o bebê a reconhecer a hora de dormir.'],
      ['Sinais de cansaço', 'Bocejos, olhar distante e irritação podem indicar sono. Cada bebê tem seu próprio ritmo.'],
      ['Ambiente', 'Mantenha o berço livre e evite excesso de roupas ou cobertas. Em caso de dúvida, converse com o pediatra.'],
    ],
  },
  {
    id: 'mala',
    title: 'Mala da\nmaternidade',
    description: 'Não esqueça nada do que vocês vão precisar.',
    bullets: ['Para a mamãe', 'Para o bebê', 'Para o pai'],
    button: 'Ver checklist',
    color: '#F3E0D2',
    icon: '👜',
    accent: COLORS.terracotta,
    details: [
      ['Para a mamãe', 'Documentos, camisolas confortáveis, chinelo, itens de higiene e roupas para a saída. Confira a lista da maternidade.'],
      ['Para o bebê', 'Roupinhas separadas por troca, mantas conforme orientação da maternidade, fraldas e itens de higiene solicitados.'],
      ['Para o pai', 'Documento, carregador, água, lanches permitidos, uma troca de roupa e contatos importantes.'],
    ],
  },
  {
    id: 'parceira',
    title: 'Apoio à parceira',
    description: 'Pequenos gestos fazem grande diferença.',
    bullets: ['Como lidar com as mudanças hormonais', 'O que ela pode sentir em cada fase', 'Dicas de apoio emocional', 'O que evitar'],
    button: 'Ver mais',
    color: '#E4E6D9',
    icon: '🤍',
    accent: COLORS.forest,
    details: [
      ['Esteja presente', 'Pergunte do que ela precisa, escute sem julgar e ofereça ajuda prática sem esperar que ela peça.'],
      ['Respeite cada fase', 'Cansaço, insegurança e emoções intensas podem aparecer. Cada experiência é diferente; acolha sem minimizar.'],
      ['Divida responsabilidades', 'Assuma tarefas da casa, organize visitas e participe dos cuidados com o bebê.'],
      ['Evite', 'Comparações, cobranças e frases que diminuam o que ela está sentindo. Se houver sofrimento intenso, incentive apoio profissional.'],
    ],
  },
];

const quickTips = [
  { icon: '♡', title: 'Prepare um', subtitle: 'ambiente tranquilo\npara o bebê.' },
  { icon: '♧', title: 'Surpreenda sua', subtitle: 'parceira com um\ngesto simples.' },
  { icon: '☺', title: 'Lembre-se:', subtitle: 'você já está fazendo\no seu melhor!' },
];

export default function Pagina2() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTip, setActiveTip] = useState(null);
  const [checked, setChecked] = useState({});

  const closeModal = () => {
    setActiveModal(null);
    setActiveTip(null);
  };

  const selectedSection = sections.find((item) => item.id === activeModal);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <ScrollView style={styles.page} contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.brand} onPress={() => setActiveTip({ title: 'Pai Presente', text: 'Juntos desde o primeiro instante. Um guia para acompanhar você em cada etapa da paternidade.' })}>
            <Text style={styles.brandMark}>☼</Text>
            <View>
              <Text style={styles.brandName}>Pai Presente</Text>
              <Text style={styles.brandTag}>Juntos desde o primeiro instante</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => setActiveTip({ title: 'Início', text: 'Bem-vindo ao Pai Presente! Aqui você encontra apoio para viver a paternidade com mais confiança.' })}>
              <Text style={styles.navText}>Início</Text>
            </TouchableOpacity>
            <View style={styles.activeNav}>
              <Text style={styles.navActiveText}>Manual do Pai</Text>
            </View>
            <TouchableOpacity onPress={() => setActiveTip({ title: 'Preparação', text: 'Prepare-se com antecedência: converse com sua parceira, organize a mala e planeje como dividir os cuidados.' })}>
              <Text style={styles.navText}>Preparação</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={() => setActiveTip({ title: 'Área do pai', text: 'Esta demonstração ainda não possui login conectado. Você pode adaptar este botão para abrir sua tela de autenticação.' })}>
            <Text style={styles.loginIcon}>♙</Text>
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.pill}><Text style={styles.pillHeart}>♥</Text><Text style={styles.pillText}>MANUAL DO PAI</Text></View>
          <Text style={styles.heroTitle}>Guia prático para{'\n'}você se tornar um{'\n'}pai incrível.</Text>
          <Text style={styles.heroText}>Aqui você encontra orientações simples e confiáveis{'\n'}para cuidar do seu bebê, apoiar sua parceira e viver{'\n'}essa fase com mais segurança.</Text>
          <Text style={styles.scribble}>﹏﹏﹏</Text>
          <View style={styles.heroNote}>
            <Text style={styles.heroNoteText}>Você{'\n'}consegue!</Text>
            <Text style={styles.heroHearts}>♡  〰</Text>
          </View>
          <View style={styles.hillBack} />
          <View style={styles.hillFront} />
        </View>

        <View style={styles.cardsGrid}>
          {sections.map((item) => (
            <View key={item.id} style={[styles.sectionCard, { backgroundColor: item.color }]}>
              <View style={styles.illustration}>
                <Text style={styles.illustrationEmoji}>{item.icon}</Text>
              </View>
              <View style={styles.cardCopy}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                {item.bullets.map((bullet) => (
                  <View key={bullet} style={styles.bulletRow}>
                    <View style={styles.checkDot}><Text style={styles.checkMark}>✓</Text></View>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
                <TouchableOpacity style={[styles.cardButton, { backgroundColor: item.accent }]} onPress={() => setActiveModal(item.id)}>
                  <Text style={styles.cardButtonText}>{item.button}</Text>
                  <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
              </View>
              <Text style={[styles.doodle, { color: item.accent }]}>{item.id === 'sono' ? '☆' : '♡'}</Text>
            </View>
          ))}
        </View>

        <View style={styles.quickPanel}>
          <View style={styles.quickIntro}>
            <View style={styles.bulbCircle}><Text style={styles.bulb}>♧</Text></View>
            <View style={styles.quickIntroCopy}>
              <Text style={styles.quickTitle}>Dicas rápidas{'\n'}do dia a dia</Text>
              <Text style={styles.quickDescription}>Pequenas atitudes que fazem{'\n'}toda a diferença nessa jornada.</Text>
              <Text style={styles.scribbleSmall}>﹏﹏﹏</Text>
            </View>
          </View>
          {quickTips.map((tip, index) => (
            <TouchableOpacity key={tip.title} style={styles.tipCard} onPress={() => setActiveTip({
              title: tip.title.replace(/,$/, ''),
              text: [
                'Deixe os itens essenciais organizados e crie um espaço calmo, seguro e confortável para os momentos de cuidado.',
                'Um bilhete carinhoso, preparar uma refeição ou assumir uma tarefa pode aliviar o dia da sua parceira.',
                'Aprender leva tempo. Peça ajuda quando precisar, celebre as pequenas conquistas e lembre-se de cuidar de você também.',
              ][index],
            })}>
              <View style={[styles.tipIcon, { backgroundColor: index === 1 ? COLORS.terracotta : COLORS.sageDark }]}><Text style={styles.tipIconText}>{tip.icon}</Text></View>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipSubtitle}>{tip.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLeaf}>❧</Text>
          <Text style={styles.footerText}>Ser pai é aprender todos os dias.</Text>
          <Text style={styles.footerSpark}>〰</Text>
        </View>
      </ScrollView>

      <Modal transparent visible={!!selectedSection} animationType="fade" onRequestClose={closeModal}>
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            {selectedSection && (
              <>
                <View style={styles.modalTop}>
                  <View style={[styles.modalIcon, { backgroundColor: selectedSection.color }]}><Text style={styles.modalEmoji}>{selectedSection.icon}</Text></View>
                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}><Text style={styles.closeText}>×</Text></TouchableOpacity>
                </View>
                <Text style={styles.modalTitle}>{selectedSection.title.replace('\n', ' ')}</Text>
                <Text style={styles.modalLead}>{selectedSection.description}</Text>
                <ScrollView style={styles.modalScroll} showsVerticalScrollIndicator={false}>
                  {selectedSection.details.map(([title, body], index) => {
                    const key = `${selectedSection.id}-${index}`;
                    return (
                      <TouchableOpacity key={key} style={styles.detailRow} onPress={() => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))}>
                        <View style={[styles.detailCheck, checked[key] && styles.detailCheckActive]}><Text style={styles.detailCheckText}>{checked[key] ? '✓' : '·'}</Text></View>
                        <View style={styles.detailCopy}>
                          <Text style={styles.detailTitle}>{title}</Text>
                          <Text style={styles.detailText}>{body}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                <Text style={styles.modalHint}>Toque em um item para marcá-lo como visto.</Text>
                <TouchableOpacity style={styles.modalDone} onPress={closeModal}><Text style={styles.modalDoneText}>Entendi, vamos nessa</Text><Text style={styles.arrow}>→</Text></TouchableOpacity>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>

      <Modal transparent visible={!!activeTip} animationType="fade" onRequestClose={closeModal}>
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={styles.smallModal} onPress={() => {}}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}><Text style={styles.closeText}>×</Text></TouchableOpacity>
            <Text style={styles.smallModalIcon}>♡</Text>
            <Text style={styles.modalTitle}>{activeTip?.title}</Text>
            <Text style={styles.detailText}>{activeTip?.text}</Text>
            <TouchableOpacity style={styles.modalDone} onPress={closeModal}><Text style={styles.modalDoneText}>Fechar</Text></TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  page: { flex: 1, backgroundColor: COLORS.background },
  pageContent: { paddingBottom: 0 },
  header: {
    minHeight: 66, paddingHorizontal: 22, paddingVertical: 12, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1,
    borderBottomColor: '#E7E1D4', backgroundColor: '#FAF7EF', flexWrap: 'wrap', gap: 10,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  brandMark: { color: COLORS.sageDark, fontSize: 31, lineHeight: 34 },
  brandName: { color: COLORS.ink, fontWeight: '800', fontSize: 17, letterSpacing: 0.2 },
  brandTag: { color: COLORS.muted, fontSize: 8.5, marginTop: 1 },
  nav: { flexDirection: 'row', alignItems: 'center', gap: 22 },
  navText: { fontSize: 10, color: '#667368' },
  activeNav: { borderBottomWidth: 2, borderBottomColor: COLORS.forest, paddingBottom: 5 },
  navActiveText: { fontSize: 10, color: COLORS.ink, fontWeight: '700' },
  loginButton: { borderWidth: 1, borderColor: '#9BA79A', borderRadius: 22, paddingVertical: 7, paddingHorizontal: 13, flexDirection: 'row', gap: 7, alignItems: 'center' },
  loginIcon: { fontSize: 13, color: COLORS.ink },
  loginText: { fontSize: 10, color: COLORS.ink },
  hero: { paddingHorizontal: 8, paddingTop: 24, paddingBottom: 40, minHeight: 235, overflow: 'hidden', position: 'relative' },
  pill: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 6, backgroundColor: '#E7E5D7', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 16, marginLeft: 7, marginBottom: 9, zIndex: 2 },
  pillHeart: { color: COLORS.terracotta, fontSize: 10 },
  pillText: { color: COLORS.ink, fontSize: 9, letterSpacing: 0.5 },
  heroTitle: { fontSize: 27, lineHeight: 28, fontWeight: '800', color: COLORS.ink, letterSpacing: 0.1, marginLeft: 7, zIndex: 2 },
  heroText: { fontSize: 10.5, lineHeight: 15, color: COLORS.muted, marginLeft: 7, marginTop: 10, zIndex: 2 },
  scribble: { color: COLORS.terracotta, fontSize: 20, marginLeft: 7, marginTop: 1, zIndex: 2 },
  heroNote: { position: 'absolute', right: 24, top: 40, transform: [{ rotate: '-10deg' }], zIndex: 2 },
  heroNoteText: { fontSize: 17, lineHeight: 21, color: COLORS.ink, fontStyle: 'italic', fontWeight: '600' },
  heroHearts: { color: COLORS.terracotta, fontSize: 22, textAlign: 'right', marginTop: 2 },
  hillBack: { position: 'absolute', right: -28, bottom: -6, width: 230, height: 70, backgroundColor: '#D9DCCB', borderTopLeftRadius: 130, borderTopRightRadius: 90, transform: [{ rotate: '-12deg' }] },
  hillFront: { position: 'absolute', left: -24, bottom: -32, width: '115%', height: 47, backgroundColor: COLORS.background, borderTopLeftRadius: 100, borderTopRightRadius: 100, zIndex: 1 },
  cardsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 14, paddingHorizontal: 22, marginTop: -7 },
  sectionCard: { width: '48%', minWidth: 245, flexGrow: 1, borderRadius: 21, padding: 15, minHeight: 192, flexDirection: 'row', gap: 10, position: 'relative', overflow: 'hidden' },
  illustration: { width: 75, height: 83, borderRadius: 48, backgroundColor: 'rgba(255,255,255,0.34)', alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  illustrationEmoji: { fontSize: 44 },
  cardCopy: { flex: 1, paddingBottom: 29 },
  cardTitle: { fontSize: 15, lineHeight: 17, fontWeight: '800', color: COLORS.ink, marginBottom: 7 },
  cardDescription: { fontSize: 9.5, lineHeight: 13, color: COLORS.muted, marginBottom: 8 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 5, marginBottom: 4 },
  checkDot: { backgroundColor: COLORS.green, width: 10, height: 10, borderRadius: 6, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  checkMark: { color: COLORS.white, fontSize: 7, fontWeight: '900', lineHeight: 9 },
  bulletText: { fontSize: 8.5, lineHeight: 11, color: '#59695D', flexShrink: 1 },
  cardButton: { position: 'absolute', bottom: 0, left: 0, minWidth: 72, borderRadius: 18, paddingVertical: 7, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 9 },
  cardButtonText: { fontSize: 9, color: COLORS.white, fontWeight: '600' },
  arrow: { fontSize: 13, color: COLORS.white },
  doodle: { position: 'absolute', right: 13, bottom: 10, fontSize: 21 },
  quickPanel: { marginHorizontal: 22, marginTop: 17, marginBottom: 0, padding: 15, backgroundColor: '#EAE9DC', borderRadius: 23, flexDirection: 'row', alignItems: 'stretch', gap: 9, flexWrap: 'wrap' },
  quickIntro: { flexDirection: 'row', alignItems: 'flex-start', flex: 1.25, minWidth: 175, gap: 10, paddingTop: 6 },
  bulbCircle: { width: 44, height: 44, borderRadius: 25, backgroundColor: COLORS.sageDark, alignItems: 'center', justifyContent: 'center' },
  bulb: { color: COLORS.white, fontSize: 25 },
  quickIntroCopy: { flex: 1 },
  quickTitle: { fontSize: 14, lineHeight: 17, fontWeight: '800', color: COLORS.ink },
  quickDescription: { color: COLORS.muted, fontSize: 9, lineHeight: 13, marginTop: 8 },
  scribbleSmall: { color: COLORS.terracotta, fontSize: 17 },
  tipCard: { flex: 1, minWidth: 90, backgroundColor: '#F8F5EC', borderRadius: 17, padding: 9, alignItems: 'center', justifyContent: 'flex-start' },
  tipIcon: { width: 29, height: 29, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 7 },
  tipIconText: { color: COLORS.white, fontSize: 17 },
  tipTitle: { color: COLORS.muted, fontSize: 9, textAlign: 'center' },
  tipSubtitle: { color: COLORS.muted, fontSize: 8.5, lineHeight: 12, textAlign: 'center', marginTop: 3 },
  footer: { backgroundColor: COLORS.forest, minHeight: 82, marginTop: 0, borderTopLeftRadius: 85, borderTopRightRadius: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 18, paddingHorizontal: 20 },
  footerText: { color: '#F7F0E3', fontSize: 13, fontStyle: 'italic', letterSpacing: 0.2 },
  footerLeaf: { color: '#D5D8C4', fontSize: 24 },
  footerSpark: { color: '#D5A078', fontSize: 20 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(30, 43, 35, 0.52)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalCard: { backgroundColor: COLORS.white, width: '100%', maxWidth: 500, maxHeight: '88%', borderRadius: 26, padding: 23 },
  modalTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  modalIcon: { width: 57, height: 57, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  modalEmoji: { fontSize: 31 },
  closeButton: { width: 34, height: 34, borderRadius: 18, backgroundColor: '#F0EEE5', alignItems: 'center', justifyContent: 'center' },
  closeText: { color: COLORS.ink, fontSize: 25, lineHeight: 28 },
  modalTitle: { fontSize: 23, lineHeight: 28, fontWeight: '800', color: COLORS.ink, marginTop: 15 },
  modalLead: { fontSize: 13, lineHeight: 19, color: COLORS.muted, marginTop: 7, marginBottom: 12 },
  modalScroll: { maxHeight: 330 },
  detailRow: { flexDirection: 'row', gap: 11, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#ECE8DE' },
  detailCheck: { width: 23, height: 23, borderRadius: 12, borderWidth: 1, borderColor: COLORS.sageDark, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  detailCheckActive: { backgroundColor: COLORS.green, borderColor: COLORS.green },
  detailCheckText: { color: COLORS.ink, fontSize: 15, fontWeight: '700' },
  detailCopy: { flex: 1 },
  detailTitle: { color: COLORS.ink, fontSize: 13, fontWeight: '800', marginBottom: 4 },
  detailText: { color: COLORS.muted, fontSize: 12, lineHeight: 18 },
  modalHint: { color: '#8A9288', fontSize: 10, marginTop: 11 },
  modalDone: { backgroundColor: COLORS.forest, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 12, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  modalDoneText: { color: COLORS.white, fontSize: 12, fontWeight: '700' },
  smallModal: { width: '100%', maxWidth: 360, borderRadius: 25, padding: 25, backgroundColor: COLORS.white, alignItems: 'flex-start' },
  smallModalIcon: { color: COLORS.terracotta, fontSize: 30, marginTop: 10 },
});
